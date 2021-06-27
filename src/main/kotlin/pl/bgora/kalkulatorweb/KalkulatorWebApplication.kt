package pl.bgora.kalkulatorweb

import com.github.bgora.rpnlibrary.exceptions.RPNException
import io.javalin.Javalin
import io.javalin.apibuilder.ApiBuilder.path
import io.javalin.plugin.openapi.OpenApiOptions
import io.javalin.plugin.openapi.OpenApiPlugin
import io.javalin.plugin.openapi.ui.ReDocOptions
import io.javalin.plugin.openapi.ui.SwaggerOptions
import io.swagger.v3.oas.models.info.Info
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.context.request.WebRequest
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler
import javax.swing.UIManager.get

@SpringBootApplication
class KalkulatorWebApplication

fun main(args: Array<String>) {

    runApplication<KalkulatorWebApplication>(*args)

    Javalin.create {
        it.registerPlugin(getConfiguredOpenApiPlugin())
        it.defaultContentType = "application/json"
    }.routes {
        path("calculate") {
            get(CalculatorController::calculate)
        }
    }.start(7001)

    println("Check out ReDoc docs at http://localhost:7001/redoc")
    println("Check out Swagger UI docs at http://localhost:7001/swagger-ui")
}

fun getConfiguredOpenApiPlugin() = OpenApiPlugin(
    OpenApiOptions(
        Info().apply {
            version("1.0")
            description("calculator API")
        }

    ).apply {
        path("/swagger-docs") // endpoint for OpenAPI json
        swagger(SwaggerOptions("/swagger-ui")) // endpoint for swagger-ui
        reDoc(ReDocOptions("/redoc")) // endpoint for redoc
    })

fun replaceDiv(input: String): String {
    return input.replace("div", "/")
}

@ControllerAdvice
class ControllerErrorHandler : ResponseEntityExceptionHandler() {

    @ExceptionHandler(value = [(RPNException::class)])
    fun handleApiException(ex: RPNException, request: WebRequest): ResponseEntity<ErrorResponse> {
        val errorDetails = ErrorResponse(status = HttpStatus.BAD_REQUEST, errorMsg = ex.message)
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorDetails)
    }
}

class Response(val input: String, val result: String)

class ErrorResponse(val status: HttpStatus, val errorMsg: String?)

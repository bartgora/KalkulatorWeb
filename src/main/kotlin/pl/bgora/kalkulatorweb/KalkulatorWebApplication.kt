package pl.bgora.kalkulatorweb

import com.github.bgora.rpnlibrary.exceptions.RPNException
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.context.request.WebRequest
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler

@SpringBootApplication
class KalkulatorWebApplication

fun main(args: Array<String>) {
    runApplication<KalkulatorWebApplication>(*args)
}

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

class ErrorResponse(val status: HttpStatus, val errorMsg: String?)

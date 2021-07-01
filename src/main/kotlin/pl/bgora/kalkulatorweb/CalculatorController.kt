package pl.bgora.kalkulatorweb

import com.github.bgora.rpnlibrary.Calculator
import org.springframework.http.HttpHeaders
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin
class CalculatorController {

    @CrossOrigin
    @GetMapping("/calculate/{input}")
    fun calculate(@PathVariable input: String): ResponseEntity<Response> {
        val calculator = Calculator.createCalculator();
        val result = calculator.calculate(replaceDiv(input)).toString()
        val httHeaders = HttpHeaders()
        httHeaders.add("Access-Control-Allow-Origin", "*")
        return ResponseEntity.ok().headers(httHeaders).body(Response(input, result))
    }
}
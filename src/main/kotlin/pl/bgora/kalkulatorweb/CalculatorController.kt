package pl.bgora.kalkulatorweb

import com.github.bgora.rpnlibrary.Calculator
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

@RestController

class CalculatorController {

    @GetMapping("/calculate/{input}")
    fun calculate(@PathVariable input: String): Response {
        val calculator = Calculator.createCalculator();
        val result = calculator.calculate(replaceDiv(input)).toString()
        return Response(input, result)
    }
}

class Response(val input: String, val result: String)
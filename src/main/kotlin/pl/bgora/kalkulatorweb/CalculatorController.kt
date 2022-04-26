package pl.bgora.kalkulatorweb

import com.github.bgora.rpnlibrary.Calculator
import org.springframework.web.bind.annotation.*

@RestController

class CalculatorController {

    @GetMapping("/calculate/{input}")
    fun calculate(@PathVariable input: String): Response {
        val calculator = Calculator.createCalculator();
        val result = calculator.calculate(replaceDiv(input)).toString()
        return Response(input, result)
    }

    @PostMapping("/calculate")
    fun calculate(@RequestBody input: CalculationRequest) : Response{
        val result = Calculator.createCalculator().calculate(input.equation).toString()
        return Response(input = input.equation, result = result)
    }
}

class CalculationRequest(val equation: String)

class Response(val input: String, val result: String)
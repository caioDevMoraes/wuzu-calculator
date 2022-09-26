import React, { Component } from "react";

// importando os componentes
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import Button from "../../components/Button"
import Display from "../../components/Display";

// criando a interface 
interface State {
    displayValue: string
    clearDisplay: boolean
    operation: string | null
    values: number[]
    current: number
}

const initialState: State = {
    displayValue: "0",
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {
    // clonando meu estado inicial
    state = { ...initialState }

    // criando os métodos
    clearMemory(): void {
        this.setState({ ...initialState })
    }

    addDigit(dig: string): void {
        if(dig === "." && this.state.displayValue.includes(".")) return
        const clearDisplay = this.state.displayValue === "0" || this.state.clearDisplay
        const currentValue = clearDisplay ? "" : this.state.displayValue
        const displayValue = currentValue + dig
        
        // setando o estado
        this.setState({ displayValue, clearDisplay: false })

        if(dig !== ".") {
            const values = [ ...this.state.values ]
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            values[i] = newValue
            
            // setando o estado
            this.setState({ values })
        }

        // localstorage
        if(this.state.current === 0) {
            localStorage.setItem("result", displayValue)
        } else {
            const ls = localStorage.getItem("result")
            localStorage.removeItem("result")
            localStorage.setItem("result", `${ls}${dig}`)
        }
    }

    setOperation(operation: string): void {
        if(this.state.current === 0) {
            if (operation === "=") return
            
            // setando o estado
            this.setState({clearDisplay: true, operation, current: 1})
            
            // localstorage
            localStorage.setItem("result", `${this.state.values[0]} ${operation} `)
        } else {
            // pegando a operação igual (result) "="
            const result = operation === "="
            const currentOperation = this.state.operation

            // clonando o array values
            const values = [ ...this.state.values ]

            // verificando a operação
            switch(currentOperation) {
                case "+":
                    values[0] += values[1]
                    break
                case "-":
                    values[0] -= values[1]
                    break
                case "*":
                    values[0] *= values[1]
                    break
                case "/":
                    values[0] /= values[1]
                    values[0] = parseFloat(values[0].toFixed(3))
                    // tratamento de erro
                    if (isNaN(values[0]) || !isFinite(values[0])) {
                        this.clearMemory()
                        return
                    }
                    break
                default:
            }

            // zerando o indice 1
            values[1] = 0
            
            // setando o estado
            this.setState({
                displayValue: values[0].toString(),
                clearDisplay: !result,
                operation: result ? null : operation,
                values,
                current: result ? 0 : 1
            })            

            // localstorage
            if(!result) {
                const ls = localStorage.getItem("result")
                localStorage.removeItem("result")
                localStorage.setItem("result", `${ls} = ${values[0]} ${operation} `)
            } else {
                const ls = localStorage.getItem("result")
                localStorage.removeItem("result")
                localStorage.setItem("result", `${ls} = ${values[0]}`)
                alert(localStorage.getItem("result"))
            }
        }
    }

    render(): JSX.Element {
        const addDigit = (dig: string) => this.addDigit(dig)
        const setOperation = (ope: string) => this.setOperation(ope)
        return (
            <>
                <Nav/>
                <div className="w-full h-70v bg-gradient-to-r from-azul-claro to-cinza-pages flex flex-col justify-around items-center text-white text-center">
                    <h1 className="text-6xl border-b-4 border-white font-bold">Calculadora</h1>
                    <div className="h-72 w-60 rounded overflow-hidden grid grid-cols-calc grid-rows-calc">
                        {/* primeira linha */}
                        <Display value={ this.state.displayValue }/>

                        {/* segunda linha */}
                        <Button label="AC" click={ () => this.clearMemory() } style="triple"/>
                        <Button label="/" click={ setOperation } style="operation"/>

                        {/* terceira linha */}
                        <Button label="7" click={ addDigit } style="default"/>
                        <Button label="8" click={ addDigit } style="default"/>
                        <Button label="9" click={ addDigit } style="default"/>
                        <Button label="*" click={ setOperation } style="operation"/>

                        {/* quarta linha */}
                        <Button label="4" click={ addDigit } style="default"/>
                        <Button label="5" click={ addDigit } style="default"/>
                        <Button label="6" click={ addDigit } style="default"/>
                        <Button label="-" click={ setOperation } style="operation"/>

                        {/* quinta linha */}
                        <Button label="1" click={ addDigit } style="default"/>
                        <Button label="2" click={ addDigit } style="default"/>
                        <Button label="3" click={ addDigit } style="default"/>
                        <Button label="+" click={ setOperation } style="operation"/>

                        {/* sexta linha */}
                        <Button label="0" click={ addDigit } style="double"/>
                        <Button label="." click={ addDigit } style="default"/>
                        <Button label="=" click={ setOperation } style="result"/>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}
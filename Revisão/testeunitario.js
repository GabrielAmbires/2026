// 1
function multiplicarTresNumeros(num1, num2, num3) {
    return num1 * num2 * num3;
}

test("Multiplicar três números", () => {
    expect(multiplicarTresNumeros(2, 3, 4)).toBe(24);
    expect(multiplicarTresNumeros(1, 5, 2)).toBe(10);
    expect(multiplicarTresNumeros(1, 0, 3)).toBe(0);
});


// 2
function dividir(num1, num2) {
    if (num2 === 0) {
        return "Não é possível dividir por 0";
    }

    return num1 / num2;
}

test("Dividir dois números", () => {
    expect(dividir(10, 2)).toBe(5);
    expect(dividir(7, 0)).toBe("Não é possível dividir por 0");
});


// 3
function celsiusFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}

function fahrenheitCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}

test("Converter Celsius para Fahrenheit", () => {
    expect(celsiusFahrenheit(0)).toBe(32);
    expect(celsiusFahrenheit(10)).toBe(50);
});

test("Converter Fahrenheit para Celsius", () => {
    expect(fahrenheitCelsius(32)).toBe(0);
    expect(fahrenheitCelsius(50)).toBe(10);
});


// 4
function calcularMedia(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

test("Calcular média", () => {
    expect(calcularMedia(3, 4, 5)).toBe(4);
    expect(calcularMedia(10, 20, 30)).toBe(20);
});


// 5
function contarCaracteres(texto) {
    return texto.length;
}

test("Contar caracteres", () => {
    expect(contarCaracteres("hello")).toBe(5);
    expect(contarCaracteres("12345")).toBe(5);
});


// 6
function calculadora(num1, num2, operador) {
    if (operador === "+") {
        return num1 + num2;
    }

    if (operador === "-") {
        return num1 - num2;
    }

    if (operador === "*") {
        return num1 * num2;
    }

    if (operador === "/") {
        if (num2 === 0) {
            return "Não é possível dividir por 0";
        }

        return num1 / num2;
    }

    return "Operador inválido";
}

test("Calculadora", () => {
    expect(calculadora(4, 2, "+")).toBe(6);
    expect(calculadora(4, 2, "-")).toBe(2);
    expect(calculadora(4, 2, "*")).toBe(8);
    expect(calculadora(4, 2, "/")).toBe(2);
});
function equation(a, b, c) {
    if (a === 0) return "Введено неприпустиме значення даних"
    var D = b * b - 4 * a * c;
    var x1, x2;
    if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        return "Коефіцієнти:a=" + a + ",b=" + b + ",c" + c + "/nКорені рівняння:Х1=" + x1 + ", x2=" + x2 + "/nДискримінант(D)=" + D;
    } else if (D === 0) {
        x1 = -b / (2 * a);
        return "Коефіцієнти:a=" + a + ",b=" + b + ",c" + c + "/nКорені рівняння:Х=" + x1 + ", x2=" + x2 + "/nДискримінант(D)=" + D;
    } else if (D < 0) return "Коефіцієнти:a=" + a + ",b=" + b + ",c" + c + "/nКорені рівняння:Х=" + x1 + ", x2=" + x2 + "/nКореней немає!!!/nДискримінант(D)=" + D;
}

function prog() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var result = equation(a, b, c);
    document.getElementById('result').textContent = result;

}
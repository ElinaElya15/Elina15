let days = prompt('Введіть кількість днів')

let weeks = Math.floor (Number(days) / 7);

document.write(`
    <div>
        <p>У ${days} днях ${weeks}тижні</p>
    </div>
`)
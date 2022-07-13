const toDoList = new Vue ({
    el: '#root',
    data:{
        tasks: [
            {
                text: 'Fare benzina',
                done: true,
            },
            {
                text: 'Prelevare al bancomat',
                done: false,
            },
            {
                text: 'Lavare il cane',
                done: true,
            },
            {
                text: 'Lavare l\'auto',
                done: false,
            },
        ]
    }
});





const toDoList = new Vue ({
    el: '#root',
    data: {
        newTask: '',
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
    },
    methods: {
        removeTask(index){
            this.tasks.splice(index, 1);
        },

        addNewTask() {
            if (this.newTask) {
                const newObject = { text: this.newTask, done: false};
                this.tasks.push(newObject);
                this.newTask = '';
            }
        },
    }
});





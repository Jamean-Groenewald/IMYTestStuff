//u23524121 Jamean Groenewald

enum Priority
{
    Low=1,
    Medium=2,
    High=3
}

interface Task
{
    id: number;
    name: string;
    date: string;
    category: 'Work' | 'Home' | 'Hobby' | 'Other';
    priority: Priority;
    tags? : string[];
    completed: boolean;
}

class TaskManager
{
    private tasks: Task[];

    constructor(taskInput?: Task[])
    {
        if(taskInput)
        {
            this.tasks = taskInput;
        }
        else
        {
            this.tasks = [];
        }
    }

    getTasks(): Task[]
    {
        return this.tasks;
    }

    addTask(taskInput: Task): void
    {
        this.tasks = [...this.tasks, taskInput];
    } 

    listTasks(): string[]
    {
        return this.tasks.map(task => 
        {
            const priorityLabel = Priority[task.priority]; //to get priority as string
            
            let tags: string;

            if(task.tags)
            {
                tags = task.tags.join(', ');
            }
            else
            {
                tags = 'No Tags'; //default val
            }

            let completedStatus: string;
            
            if(task.completed)
            {
                completedStatus = 'Yes';
            }
            else
            {
                completedStatus = 'No';
            }

            return `${task.id} | ${task.name} (${task.category})
                    \nPriority: ${priorityLabel}
                    \nDate: ${task.date}
                    \nTags: ${tags}
                    \nCompleted: ${completedStatus}`;
        });
    }

    sortTasksbyPriority(): void
    {
        this.tasks = [...this.tasks].sort((a, b) => b.priority - a.priority);
    }

    findTask(input: number | string): Task | undefined
    {
        if(typeof input === 'number')
        {
            return this.tasks.find(task => task.id === input);
        }
        else if(typeof input === 'string')
        {
            return this.tasks.find(task => task.name.toLowerCase() === input.toLowerCase());
        }
    }
}
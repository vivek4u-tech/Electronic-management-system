const employees = [
  {
    id: 1,
    firstName: "Vivek",
    email: "vivek@me.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Report",
        taskDescription: "Prepare monthly sales report",
        taskDate: "2026-01-05",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team Meeting",
        taskDescription: "Attend weekly team meeting",
        taskDate: "2026-01-02",
        category: "Meeting"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Client Follow-up",
        taskDescription: "Follow up with pending client",
        taskDate: "2026-01-01",
        category: "Client"
      }
    ]
  },

  {
    id: 2,
    firstName: "Rohit",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription: "Create homepage UI design",
        taskDate: "2026-01-06",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Bugs",
        taskDescription: "Resolve UI bugs",
        taskDate: "2026-01-03",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review teammate code",
        taskDate: "2026-01-02",
        category: "Development"
      }
    ]
  },

  {
    id: 3,
    firstName: "Suresh",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription: "Take daily DB backup",
        taskDate: "2026-01-06",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Optimize Queries",
        taskDescription: "Improve DB query performance",
        taskDate: "2026-01-01",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Server Monitoring",
        taskDescription: "Monitor server health",
        taskDate: "2026-01-04",
        category: "DevOps"
      }
    ]
  },

  {
    id: 4,
    firstName: "Neha",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Content Writing",
        taskDescription: "Write blog content",
        taskDate: "2026-01-06",
        category: "Content"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "SEO Update",
        taskDescription: "Improve SEO keywords",
        taskDate: "2026-01-02",
        category: "Marketing"
      }
    ]
  },

  {
    id: 5,
    firstName: "Priya",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Test Application",
        taskDescription: "Perform application testing",
        taskDate: "2026-01-06",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Reporting",
        taskDescription: "Report identified bugs",
        taskDate: "2026-01-02",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Automation Script",
        taskDescription: "Write automation test script",
        taskDate: "2026-01-01",
        category: "Testing"
      }
    ]
  }
];

export default employees;


const admin = [{
  "id": 101,
  "email": "admin@me.com",
  "password": "123"
}];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees)) 
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
 
  return {employees, admin}
}
 
   

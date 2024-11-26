const data = [
    {
        "id": "A001",
        "name": "John Doe",
        "email": "admin@company.com",
        "password": "admin123",
        "role": "Administrator",
        "active": true
    },
    {
        "id": "E001",
        "name": "Alice Smith",
        "email": "alice.smith@company.com",
        "password": "alice@123",
        "role": "Employee",
        "qualifications": "MSc in Computer Science",
        "services": [
            "AI-dependent services and solutions",
            "Cloud infrastructure VAPT"
        ],
        "previous_projects": [
            {
                "project": "AI chatbot development",
                "client": "Delta Corp"
            },
            {
                "project": "AWS infrastructure audit",
                "client": "Gamma Co"
            }
        ],
        "current_projects": [
            {
                "project": "Cloud migration",
                "client": "Delta Corp"
            }
        ],
        "active": true
    },
    {
        "id": "E002",
        "name": "Bob Johnson",
        "email": "bob.johnson@company.com",
        "password": "bob@123",
        "role": "Employee",
        "qualifications": "BTech in Information Technology",
        "services": [
            "Threat monitoring & SOC",
            "Company infrastructure & services VAPT"
        ],
        "previous_projects": [
            {
                "project": "SOC implementation",
                "client": "Echo Ltd"
            },
            {
                "project": "Cloud VAPT services",
                "client": "India Solutions"
            }
        ],
        "current_projects": [
            {
                "project": "Penetration testing",
                "client": "Echo Ltd"
            }
        ],
        "active": true
    },
    {
        "id": "E003",
        "name": "Charlie Brown",
        "email": "charlie.brown@company.com",
        "password": "charlie@123",
        "role": "Employee",
        "qualifications": "BSc in Cybersecurity",
        "services": [
            "Company infrastructure & services VAPT",
            "Threat monitoring & SOC"
        ],
        "previous_projects": [
            {
                "project": "Internal vulnerability assessment",
                "client": "Foxtrot Inc"
            },
            {
                "project": "Threat monitoring",
                "client": "Kilo Group"
            }
        ],
        "current_projects": [
            {
                "project": "SOC setup",
                "client": "Kilo Group"
            }
        ],
        "active": false
    }
    ,
    {
        "id": "C001",
        "name": "Delta Corp",
        "email": "contact@deltacorp.com",
        "password": "delta@123",
        "role": "Client",
        "organization": "Delta Corporation",
        "contact_details": "123-456-7890",
        "assigned_employee": "E001",
        "previous_works": [
            {
                "service": "AI chatbot development",
                "employee": "Alice Smith"
            }
        ],
        "current_work": {
            "service": "Cloud migration",
            "employee": "Alice Smith"
        },
        "active": true
    },
    {
        "id": "C002",
        "name": "Echo Ltd",
        "email": "info@echoltd.com",
        "password": "echo@123",
        "role": "Client",
        "organization": "Echo Limited",
        "contact_details": "123-456-7891",
        "assigned_employee": "E002",
        "previous_works": [
            {
                "service": "SOC implementation",
                "employee": "Bob Johnson"
            }
        ],
        "current_work": {
            "service": "Penetration testing",
            "employee": "Bob Johnson"
        },
        "active": true
    }, {
        "id": "C003",
        "name": "Foxtrot Inc",
        "email": "contact@foxtrotinc.com",
        "password": "foxtrot@123",
        "role": "Client",
        "organization": "Foxtrot Incorporated",
        "contact_details": "123-456-7892",
        "assigned_employee": "E003",
        "previous_works": [
            {
                "service": "Internal vulnerability assessment",
                "employee": "Charlie Brown"
            }
        ],
        "current_work": {
            "service": "Threat monitoring",
            "employee": "Charlie Brown"
        },
        "active": true
    },
    {
        "id": "C004",
        "name": "Kilo Group",
        "email": "info@kilogroup.com",
        "password": "kilo@123",
        "role": "Client",
        "organization": "Kilo Group Corporation",
        "contact_details": "123-456-7893",
        "assigned_employee": "E003",
        "previous_works": [
            {
                "service": "Threat monitoring",
                "employee": "Charlie Brown"
            }
        ],
        "current_work": {
            "service": "SOC setup",
            "employee": "Charlie Brown"
        },
        "active": false
    },
    {
        "id": "C005",
        "name": "Gamma Co",
        "email": "contact@gammaco.com",
        "password": "gamma@123",
        "role": "Client",
        "organization": "Gamma Corporation",
        "contact_details": "123-456-7894",
        "assigned_employee": "E001",
        "previous_works": [
            {
                "service": "AWS infrastructure audit",
                "employee": "Alice Smith"
            }
        ],
        "current_work": {
            "service": "Cloud VAPT services",
            "employee": "Alice Smith"
        },
        "active": true
    },
    {
        "id": "C006",
        "name": "India Solutions",
        "email": "contact@indiasolutions.com",
        "password": "india@123",
        "role": "Client",
        "organization": "India Solutions Pvt. Ltd.",
        "contact_details": "123-456-7895",
        "assigned_employee": "E002",
        "previous_works": [
            {
                "service": "Cloud VAPT services",
                "employee": "Bob Johnson"
            }
        ],
        "current_work": {
            "service": "Threat monitoring & SOC",
            "employee": "Bob Johnson"
        },
        "active": true
    },
    {
        "id": "C007",
        "name": "Juliet Enterprises",
        "email": "info@julietenterprises.com",
        "password": "juliet@123",
        "role": "Client",
        "organization": "Juliet Enterprises",
        "contact_details": "123-456-7896",
        "assigned_employee": "E001",
        "previous_works": [
            {
                "service": "AI chatbot development",
                "employee": "Alice Smith"
            }
        ],
        "current_work": {
            "service": "Cloud migration",
            "employee": "Alice Smith"
        },
        "active": true
    },
    {
        "id": "C008",
        "name": "Lima Tech",
        "email": "contact@limatech.com",
        "password": "lima@123",
        "role": "Client",
        "organization": "Lima Technologies",
        "contact_details": "123-456-7897",
        "assigned_employee": "E003",
        "previous_works": [
            {
                "service": "Internal vulnerability assessment",
                "employee": "Charlie Brown"
            }
        ],
        "current_work": {
            "service": "Threat monitoring & SOC",
            "employee": "Charlie Brown"
        },
        "active": false
    }
]

// export const setLocalStorage = () => {
//     localStorage.setItem('admin', JSON.stringify(admin_data))
//     localStorage.setItem('employee', JSON.stringify(employee_data))
//     localStorage.setItem('client', JSON.stringify(client_data))
// }


// export const getLocalStorage = () => {
//     const employee = JSON.parse(localStorage.getItem('employee'))
//     const admin = JSON.parse(localStorage.getItem('admin'))
//     const client = JSON.parse(localStorage.getItem('client'))

//     return { employee, admin, client }
// }

export const setLocalStorage = () => {
    localStorage.setItem('data', JSON.stringify(data))
}


export const getLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem('data'))

    return { data }
}
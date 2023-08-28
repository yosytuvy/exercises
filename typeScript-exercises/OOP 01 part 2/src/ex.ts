abstract class Person {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class Patient extends Person {
    patientID: string;

    constructor(firstName: string, lastName: string, patientID: string) {
        super(firstName, lastName);
        this.patientID = patientID;
    }

    printPatient() {
        console.log(`patient ID: ${this.patientID}`);
        console.log(`First Name: ${this.firstName}`);
        console.log(`Last Name: ${this.lastName}`);
    }
}

class Doctor extends Person {
    doctorId: string;
    specialization: string;

    constructor(
        doctorId: string,
        firstName: string,
        lastName: string,
        specialization: string
    ) {
        super(firstName, lastName);
        this.doctorId = doctorId;
        this.specialization = specialization;
    }

    printDoctor() {
        console.log(`Doctor ID: ${this.doctorId}`);
        console.log(`First Name: ${this.firstName}`);
        console.log(`Last Name: ${this.lastName}`);
        console.log(`Specialization: ${this.specialization}`);
    }
}

class Appointment {
    patient: Patient;
    doctor: Doctor;
    date: string;
    time: string;

    constructor(patient: Patient, doctor: Doctor, date: string, time: string) {
        this.patient = patient;
        this.doctor = doctor;
        this.date = date;
        this.time = time;
    }

    printAppointment() {
        console.log(`Patient:`);
        console.log(`First Name: ${this.patient.firstName}`);
        console.log(`Last Name: ${this.patient.lastName}`);
        console.log(`Doctor:`);
        console.log(`First Name: ${this.doctor.firstName}`);
        console.log(`Last Name: ${this.doctor.lastName}`);
        console.log(`Date: ${this.date}`);
        console.log(`Time: ${this.time}`);
    }
}

class Hospital {
    Name: string;
    appointments: Appointment[];
    doctors: Doctor[];
    patients: Patient[];

    constructor(Name: string) {
        this.Name = Name;
        this.appointments = [];
        this.doctors = [];
        this.patients = [];
    }

    addPatient(newPatient: Patient) {
        this.patients.push(newPatient);
    }

    addDoctor(newDoctor: Doctor) {
        this.doctors.push(newDoctor);
    }

    addAppointment(newAppointment: Appointment) {
        this.appointments.push(newAppointment);
    }

    showAllAppointment() {
        this.appointments.forEach((appointment) => {
            appointment.printAppointment();
        });
    }

    showAppointmentByDoctorID(id: string) {
        this.appointments.forEach((appointment) => {
            if (appointment.doctor.doctorId === id) {
                appointment.printAppointment();
            }
        });
    }

    showAppointmentByPatientID(id: string) {
        this.appointments.forEach((appointment) => {
            if (appointment.patient.patientID === id) {
                appointment.printAppointment();
            }
        });
    }

    showTodayAppointment() {
        const todayDate = String(new Date());
        this.appointments.forEach((appointment) => {
            if (appointment.date === todayDate) {
                appointment.printAppointment();
            }
        });
    }
}



// Create some patients
const patient1 = new Patient("John", "Doe", "P001");
const patient2 = new Patient("Jane", "Doe", "P002");

// Create some doctors
const doctor1 = new Doctor("D001", "James", "Smith", "Cardiology");
const doctor2 = new Doctor("D002", "Sarah", "Johnson", "Orthopedics");

// Create some appointments
const appointment1 = new Appointment(patient1, doctor1, "8/29/2022", "10:00AM");
const appointment2 = new Appointment(patient2, doctor2, "8/29/2022", "11:00AM");

// Create a hospital
const hospital = new Hospital("Grand Hospital");

// Add patients
hospital.addPatient(patient1);
hospital.addPatient(patient2);

// Add doctors
hospital.addDoctor(doctor1);
hospital.addDoctor(doctor2);

// Add appointments
hospital.addAppointment(appointment1);
hospital.addAppointment(appointment2);

// Show all appointments
hospital.showAllAppointment();

// Show appointments for a doctor
hospital.showAppointmentByDoctorID("D001");

// Show appointments for a patient
hospital.showAppointmentByPatientID("P001");

// Show today's appointments
hospital.showTodayAppointment();

// Print individual objects
patient1.printPatient();
doctor1.printDoctor();
appointment1.printAppointment();

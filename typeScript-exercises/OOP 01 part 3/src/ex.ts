class Person {
    firstName: string;
    lastName: string;
    age: number;
    address: string;

    constructor(
        firstName: string,
        lastName: string,
        age: number,
        address: string
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
}

class MedicalStaff extends Person {
    staffId: string;
    position: string;
    department: string;

    constructor(
        staffId: string,
        firstName: string,
        lastName: string,
        age: number,
        address: string,
        position: string,
        department: string
    ) {
        super(firstName, lastName, age, address);
        this.staffId = staffId;
        this.position = position;
        this.department = department;
    }
}

class Patient extends Person {
    patientID: string;
    phoneNumber: string;
    emergencyContact: string;
    medicalHistory: Appointment[] = [];

    constructor(
        patientID: string,
        firstName: string,
        lastName: string,
        age: number,
        address: string,
        phoneNumber: string,
        emergencyContact: string
    ) {
        super(firstName, lastName, age, address);
        this.patientID = patientID;
        this.phoneNumber = phoneNumber;
        this.emergencyContact = emergencyContact;
    }

    updateMedicalHistory(appointment: Appointment) {
        this.medicalHistory.push(appointment);
    }

    printPatient() {
        console.log(`patient ID: ${this.patientID}`);
        console.log(`First Name: ${this.firstName}`);
        console.log(`Last Name: ${this.lastName}`);
    }
}

class Doctor extends MedicalStaff {
    doctorId: string;
    specialization: string;
    availability: Record<string, Record<string, Appointment>> = {};
    ageRange: [number, number] = [0, 99];

    constructor(
        doctorId: string,
        staffId: string,
        firstName: string,
        lastName: string,
        age: number,
        address: string,
        position: string,
        department: string,
        specialization: string
    ) {
        super(staffId, firstName, lastName, age, address, position, department);
        this.doctorId = doctorId;
        this.specialization = specialization;
    }

    printDoctor() {
        console.log(`Doctor ID: ${this.doctorId}`);
        console.log(`First Name: ${this.firstName}`);
        console.log(`Last Name: ${this.lastName}`);
        console.log(`Specialization: ${this.specialization}`);
    }

    setAgeRange(min: number, max: number) {
        this.ageRange = [min, max];
    }

    addAvailability(appointment: Appointment) {
        const patientAge = appointment.patient.age;
        if (patientAge < this.ageRange[0] || patientAge > this.ageRange[1]) {
            console.log(`patient age is not in docotr range...`);
            return;
        }

        const date = appointment.date;
        const time = appointment.time;
        if (!(date in this.availability)) {
            this.availability[date] = {};
            this.availability[date][time] = appointment;
        } else if (!(time in this.availability[date])) {
            this.availability[date][time] = appointment;
        } else if (this.availability[date][time].state === "canceled") {
            this.availability[date][time] = appointment;
        } else {
            console.log(`the date and time is not avalible...`);
        }
    }
}

class Appointment {
    patient: Patient;
    doctor: Doctor;
    date: string;
    time: string;
    state: "planned" | "completed" | "canceled" = "planned";

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

    changeState(state: "planned" | "completed" | "canceled") {
        this.state = state;
    }
}

class MedicalRecord {
    patient: Patient;
    doctor: Doctor;
    diagnosis: string;
    prescription: string;

    constructor(
        patient: Patient,
        doctor: Doctor,
        diagnosis: string,
        prescription: string
    ) {
        this.patient = patient;
        this.doctor = doctor;
        this.diagnosis = diagnosis;
        this.prescription = prescription;
    }
}

class Hospital {
    Name: string;
    appointments: Appointment[];
    doctors: Doctor[];
    patients: Patient[];
    medicalRecords: MedicalRecord[];

    constructor(Name: string) {
        this.Name = Name;
        this.appointments = [];
        this.doctors = [];
        this.patients = [];
        this.medicalRecords = [];
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

    createMedicalRecord(medicalRecord: MedicalRecord) {
        this.medicalRecords.push(medicalRecord);
    }

    getDoctorSchedule(doctor: Doctor, date: string) {
        const schedule: Appointment[] = [];
        if (date in doctor.availability) {
            for (let time in doctor.availability[date]) {
                if (doctor.availability[date][time].state === "planned") {
                    schedule.push(doctor.availability[date][time]);
                }
            }
        }
        return schedule;
    }

    getDoctorAvailability(doctor: Doctor, date: string) {
        const schedule: Appointment[] = [];
        if (date in doctor.availability) {
            for (let time in doctor.availability[date]) {
                if (doctor.availability[date][time].state === "canceled") {
                    schedule.push(doctor.availability[date][time]);
                }
            }
        }
        return schedule;
    }

    getMedicalRecords(patient: Patient) {
        const filterRecords: MedicalRecord[] = [];
        this.medicalRecords.forEach((record) => {
            if (record.patient === patient) {
                filterRecords.push(record);
            }
        });
        return filterRecords;
    }

    getDoctorBySpecialization(specialization: string) {
        const filterDoctors: Doctor[] = [];
        this.doctors.forEach((doctor) => {
            if (doctor.specialization === specialization) {
                filterDoctors.push(doctor);
            }
        });
        return filterDoctors;
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

// Implementetion
/////////////////////////////////

// Implement Person class
const person1 = new Person("John", "Doe", 30, "123 Main St");

// Implement MedicalStaff class
const nurse = new MedicalStaff(
    "123",
    "Jane",
    "Doe",
    40,
    "456 Park Ave",
    "Nurse",
    "Emergency"
);

// Implement Patient class
const patient1 = new Patient(
    "P001",
    "Jim",
    "Smith",
    45,
    "789 Elm St",
    "555-1234",
    "Jane Doe"
);

// Implement Doctor class
const doctor1 = new Doctor(
    "D001",
    "987",
    "Mary",
    "Jones",
    50,
    "321 Oak Rd",
    "Doctor",
    "Cardiology",
    "Cardiologist"
);

// Implement Appointment class
const appointment1 = new Appointment(
    patient1,
    doctor1,
    "8/28/2023",
    "10:30 AM"
);

patient1.updateMedicalHistory(appointment1);
patient1.printPatient();

doctor1.printDoctor();
doctor1.setAgeRange(18, 65);

appointment1.printAppointment();

// Implement MedicalRecord class
const record1 = new MedicalRecord(
    patient1,
    doctor1,
    "High blood pressure",
    "Blood pressure medication"
);

// Implement Hospital class
const hospital = new Hospital("Grand Hospital");

hospital.addPatient(patient1);
hospital.addDoctor(doctor1);
hospital.addAppointment(appointment1);

hospital.showAllAppointment();
hospital.showAppointmentByDoctorID("D001");
hospital.showAppointmentByPatientID("P001");
hospital.showTodayAppointment();

doctor1.addAvailability(appointment1);
console.log(hospital.getDoctorSchedule(doctor1, "8/28/2023"));

hospital.createMedicalRecord(record1);
console.log(hospital.getMedicalRecords(patient1));

console.log(hospital.getDoctorBySpecialization("Cardiologist"));

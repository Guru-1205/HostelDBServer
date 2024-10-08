const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String },
    rollNo: { type: String },
    caste: { type: String },
    community: { type: String },
    classBranchSection: { type: String },
    yearOfStudy: { type: String },
    fatherName: { type: String },
    fatherOccupation: { type: String },
    fatherIncome: { type: String },
    fatherMobile: { type: String },
    motherName: { type: String },
    motherOccupation: { type: String },
    motherIncome: { type: String },
    motherMobile: { type: String },
    residentialAddress1: { type: String },
    residentialAddress2: { type: String },
    residentialAddress3: { type: String },
    residentialCity: { type: String },
    residentialState: { type: String },
    residentialPincode: { type: String },
    localGuardianName: { type: String },
    localGuardianAddress1: { type: String },
    localGuardianAddress2: { type: String },
    localGuardianAddress3: { type: String },
    localGuardianCity: { type: String },
    localGuardianState: { type: String },
    localGuardianPincode: { type: String },
    localGuardianMobile: { type: String },
    siblings: { type: String },
    studentEmail: { type: String },
    studentMobile: { type: String },
    religion: { type: String },
    bloodGroup: { type: String },
    allergies: { type: String },
    healthProblems: { type: String },
    inHostel:{type: Boolean, default:true}
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);

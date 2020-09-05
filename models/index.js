import mongoose from '../database/index.js';

const GradesSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    subject:{
        type: String,
        require:true,
        unique: true
    },
    type:{
        type: String,
        require:true,
    },
    value:{
        type: Number,
        require:true,
        min: 0
    }
})
const Grades = mongoose.model('Grades', GradesSchema);

export default Grades;
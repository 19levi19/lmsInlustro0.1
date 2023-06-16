app.use(require('../mongodb/models/courses'));
app.use(require('../mongodb/models/users'));

const createcourse = async (req,res) => {
    
};
const getallcourse = async (req,res) => {};
const updatecourse = async (req,res) => {};
const getcoursebyid = async (req,res) =>{};
const deletecourse = async (req,res) => {};
const sutudentsenrolled = async (req,res) =>{};
const instructor = async (req,res) =>{};

module.exports(
    createcourse,
    getallcourse,
    updatecourse,
    getcoursebyid,
    deletecourse,
    sutudentsenrolled,
    instructor,
)

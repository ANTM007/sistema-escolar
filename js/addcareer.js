$(document).ready(function() {
    $('.select-careers-teachers').select2();
});

let txtSubject = '',
    txtSubjectName = '',
    txtSubjectSemester = '',
    txtSubjectDescription = '',
    selectCareer = '',
    selectSubjectCareer = '',
    selectSubjectCareerId = '',
    selectSubjectCareerName = '',
    optionSelect = '';

selectSubjectCareer = document.getElementById('selectsubjectcareer');
selectSubjectCareer.addEventListener('change',
    function() {
        optionSelect = this.options[selectSubjectCareer.selectedIndex];
        selectSubjectCareerId = optionSelect.value;
        selectSubjectCareerName = optionSelect.text;
    });

selectCareer = document.getElementById('selectsubjectcareer');
selectCareer.addEventListener('change', () => {
    txtSubject = $('#txtsubject').val();
    txtSubjectName = $('#txtsubjectname').val();
    txtSubjectSemester = $('#txtsubjectsemester').val();
    txtSubjectDescription = $('#txtsubjectdescription').val();

    $.ajax({
        type: 'POST',
        url: 'search_teachers.php',
        data: {
            txtsubject: txtSubject,
            txtsubjectname: txtSubjectName,
            txtsubjectsemester: txtSubjectSemester,
            txtsubjectdescription: txtSubjectDescription,
            selectsubjectcareerid: selectSubjectCareerId,
            selectsubjectcareername: selectSubjectCareerName
        },
        success: function() {
            location.reload();
        }
    });
});

let selectTeachers = ',',
    valueSelectTeacher = '',
    valueUnselectTeacher = '',
    tempSelectTeachers = '',
    findTeacher = '';

$('.select-careers-teachers').on('select2:select', function(e) {
    valueSelectTeacher = e.params.data.id;
    selectTeachers += valueSelectTeacher + ',';
});

$('.select-careers-teachers').on('select2:unselect', function(e) {
    tempSelectTeachers = selectTeachers;
    valueUnselectTeacher = e.params.data.id;

    findTeacher = tempSelectTeachers.replace(valueUnselectTeacher, '');
    findTeacher = findTeacher.replace(',,', ',');
    selectTeachers = findTeacher;
});

function sendTeachers() {
    $.ajax({
        type: 'POST',
        url: 'send_teachers.php',
        data: {
            txtselectteachers: selectTeachers
        },
        success: function() {
            return true;
        }
    });
}
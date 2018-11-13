function doOnCurrentPageChanged(survey) {
    document
        .getElementById('surveyPrev')
        .style
        .display = !survey.isFirstPage
            ? "inline"
            : "none";
    document
        .getElementById('surveyNext')
        .style
        .display = !survey.isSecondPage
            ? "inline"
            : "none";
    document
        .getElementById('surveyNext')
        .style
        .display = !survey.isThirdPage
            ? "inline"
            : "none";
    document
        .getElementById('surveyNext')
        .style
        .display = !survey.isFourthPage
            ? "inline"
            : "none";
    document
        .getElementById('surveyComplete')
        .style
        .display = survey.isLastPage
            ? "inline"
            : "none";
    document
        .getElementById('surveyProgress')
        .innerText = "Page " + (
    survey.currentPageNo + 1) + " of " + survey.visiblePageCount + ".";
    if (document.getElementById('surveyPageNo')) 
        document
            .getElementById('surveyPageNo')
            .value = survey.currentPageNo;
    }

Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "Reference check survey.",
    pages: [
        {
            questions: [
                {
                  name: "applicantName",
                  type: "text",
                  title: "Applicant's Name:",
                  placeHolder: "Jane Doe",
                  isRequired: true
                },
                {
                  name: "referenceName",
                  type: "text",
                  title: "Reference Name:",
                  placeHolder: "John Doe",
                  isRequired: true
                }
            ]
        }, {
            questions: [
                {
                  name: "phone",
                  type: "text",
                  inputType: "number",
                  title: "Reference Phone Number:",
                  placeHolder: "111-111-1111",
                  isRequired: true
                },
                {
                  name: "title",
                  type: "text",
                  title: "Reference Title:",
                  placeHolder: "Supervisor, Manager etc.",
                  isRequired: false
                }
            ]
        }, {
            questions: [
                {
                  name: "employmentStartDate",
                  type: "text",
                  inputType: "date",
                  title: "Employment start date:",
                  isRequired: true
                }, 
                {
                  name: "employmentEndDate",
                  type: "text",
                  inputType: "date",
                  title: "Employment end date:",
                  isRequired: false
                }
            ]
        },{
            questions: [
                {
                  name: "jobTitle",
                  type: "text",
                  title: "Applicant's most recent job title?",
                  placeHolder: "Analyst, Programmer etc.",
                  isRequired: true
                }, 
                {
                  name: "salary",
                  type: "text",
                  inputType: "number",
                  title: "What was applicant's ending salary?",
                  placeHolder: "50000, 60000 etc.",
                  isRequired: true
                }
            ]
        },{
            questions: [
                {
                  name: "directSupervisor",
                  type: "text",
                  title: "Did you directly supervise applicant?",
                  placeHolder: "Yes or No",
                  isRequired: true
                }, 
                {
                  name: "comments",
                  type: "text",
                  title: "Comments:",
                  placeHolder: "Additional comments",
                  isRequired: false,
                }
            ]
        }
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        window.location = "thankyou.html";
    });

survey.showTitle = false;

$("#surveyElement").Survey({model: survey, onCurrentPageChanged: doOnCurrentPageChanged});

doOnCurrentPageChanged(survey);
survey.showTitle = false;

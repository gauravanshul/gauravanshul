app.controller('exploreController', function($scope) {
  var exploreData = {
    exploreInvestment:[
      {
        bondType: "GOI Savings Bond",
        issuerName: "Mshindra and Mahindra Fianncial Holdings Pvt Ltd.",
        creditRating: "AA",
        annualReturn: "8.3",
        frequency: "quarterely",
        ltp: "8000",
        maturityDate: "14 Jan 2018",
        investmentType: "Government"
      },
      {
        bondType: "Corporate Bond",
        issuerName: "ICICI Bank",
        creditRating: "AAA",
        annualReturn: "8.1",
        frequency: "quarterely",
        ltp: "8000",
        maturityDate: "14 Jan 2019",
        investmentType: "Corporate"
      },{
        bondType: "Company FD",
        issuerName: "ICICI Bank",
        creditRating: "AA",
        annualReturn: "6.3",
        frequency: "quarterely",
        ltp: "8000",
        maturityDate: "14 Jan 2020",
        investmentType: "CompanyFD"
      },{
        bondType: "GOI Savings Bond",
        issuerName: "ICICI Bank",
        creditRating: "AA",
        annualReturn: "5.3",
        frequency: "quarterely",
        ltp: "8000",
        maturityDate: "14 Jan 2021",
        investmentType: "Government"
      },{
        bondType: "GOI Savings Bond",
        issuerName: "ICICI Bank",
        creditRating: "AA",
        annualReturn: "8.3",
        frequency: "quarterely",
        ltp: "8000",
        maturityDate: "14 Jan 2022",
        investmentType: "Government"
      },{
        bondType: "GOI Savings Bond",
        issuerName: "ICICI Bank",
        creditRating: "AA",
        annualReturn: "8.0",
        frequency: "quarterely",
        ltp: "8000",
        maturityDate: "14 Jan 2023",
        investmentType: "Government"
      },
      {
        bondType: "Microloan",
        issuerName: "ICICI Bank",
        creditRating: "AA",
        annualReturn: "8.0",
        frequency: "quarterely",
        ltp: "8000",
        maturityDate: "14 Jan 2024",
        investmentType: "Microloan"
      },
      {
        bondType: "Microloan",
        issuerName: "ICICI Bank",
        creditRating: "AA",
        annualReturn: "8.0",
        frequency: "quarterely",
        ltp: "8000",
        maturityDate: "14 Jan 2025",
        investmentType: "Microloan"
      }
    ]
  };
  $scope.myValue = 1;
  $scope.logoutClick = false;
  let masterFilteredBonds = exploreData.exploreInvestment;
  $scope.exploreInvestment = exploreData.exploreInvestment;
  let newData = [];
  let applyFilter = document.getElementsByClassName('apply-filter')[0];
  if ($scope.returnValue) {
    $scope.getReturnYear();
  }
  $scope.getCurrentRating = function($event) {
    var value = [];
    var isActive = false;
    var element = document.getElementsByClassName("cr-rate");
    let filterOne = {};
    applyFilter.classList.remove('active');
    for(var i=0; i<$event.target.classList.length; i++) {
      if($event.target.classList[i] == 'active') {
        isActive = true;
      }
    }
    isActive === true ? $event.target.classList.remove('active') : $event.target.classList.add('active');
    for (var i=0;i<element.length;i++) {
      for (var j=0;j<element[i].classList.length;j++) {
        if (element[i].classList[j] == "active") {
          value.push(element[i].outerText);
        }
      }
    }
    $scope.sortObject("creditRating", value);
  }
  $scope.getBondType = function($event) {
    var checkedBoxes = document.querySelectorAll('.checkbox input[type=checkbox]:checked');
    var value = [];
    var filterTwo = {};
    applyFilter.classList.remove('active');
    if (checkedBoxes.length){
      for(var i=0; i<checkedBoxes.length; i++){
        value.push(checkedBoxes[i].value);
      }
      $scope.sortObject("investmentType", value);
    } else {
      $scope.exploreInvestment = exploreData.exploreInvestment;
    }
  }
  $scope.calculateRange = function() {
    var value = [];
    var filterThree = {};
    applyFilter.classList.remove('active');
    value.push($scope.myValue);
    $scope.sortObject("maturityDate", value);
  }
  $scope.getReturnYear = function() {
    var value = [];
    var filterFour = {};
    applyFilter.classList.remove('active');
    value.push($scope.returnValue);
    $scope.sortObject("annualReturn", value);
  }
  $scope.sortObject = function(type, value) {
    let data = masterFilteredBonds;
    let invType = type;
    let creditValue = value;
    let sysDate = "";
    if (value.length) {
      newData = [];
      for (let i=0; i<value.length; i++ ) {
        for (let j=0; j<data.length; j++) {
          if ((data[j][type] == value[i]) && type!=="annualReturn") {
            newData.push(data[j]);
          }
          if (type === "annualReturn"){
            if(data[j][type]>=value[i]){
              newData.push(data[j]);
            }
          }
        }
      }
    } else {
      let currentDate = (new Date()).getFullYear();
      currentDate = currentDate + value;
      for (let i=0; i<data.length; i++){
        sysDate = data[i][type].split(" ")[2];

        if (sysDate<=currentDate){
          if(value > 1){
            newData.push(data[i]);
          }
        }
        if (value == 1) {
          newData.push(data[i]);
        }
      }
    }
    masterFilteredBonds = newData;
  }
  $scope.showFilteredBonds = function(event) {
    event.target.classList.add('active');
    $scope.exploreInvestment = newData;
  }
  $scope.addToOrder = function() {

  }
});

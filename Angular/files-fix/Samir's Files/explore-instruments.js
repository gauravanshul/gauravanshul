angular
    .module('goldenpi')
    .controller('ExploreInstrumentsController', ['$scope', 'InstrumentDetails', 'OrderDetails', 'InvestmentPurpose', '$state',
        function ($scope, InstrumentDetails, OrderDetails, InvestmentPurpose, $state) {
            let applyFilter = document.getElementsByClassName('apply-filter')[0];
            $scope.instruments = null
            $scope.filteredInstruments = [];
            $scope.investPurpose = null;
            $scope.selectedRatings = [];
            $scope.selectedBondTypes = [];
            $scope.selectedTenure = 5;
            $scope.selectedReturn = 0;
            $scope.addedBonds = [];

            InstrumentDetails.find({
                filter: {
                }
            })
            .$promise
            .then( function (intrumentsResponse) {
                if (intrumentsResponse != null && intrumentsResponse.length > 0) {
                    $scope.instruments = intrumentsResponse;
                    InvestmentPurpose
                        .find({
                            filter: {
                                where: {
                                    customerId: $scope.currentUser.id
                                }
                            }
                        })
                        .$promise
                        .then(function (investPurposeResponse) {
                            if (investPurposeResponse != null && investPurposeResponse.length > 0) {
                                $scope.investPurpose = investPurposeResponse[0];
                                $scope.populateFiltersFromInvestPurpose();
                                $scope.applyFilter();
                            }
                        },
                        //error function, currently assuming only session timeout
                        function (result) {
                            alert("Session expired, please login again");
                            $rootScope.returnTo = {
                                state: "exploreInstruments",
                                params: null
                            };
                            $state.go('login');
                        }
                        );
                }
            }
            );

            $scope.populateFiltersFromInvestPurpose = function () {
                $scope.selectedRatings = [];
                $scope.selectedBondTypes = [];
                $scope.Government = false;
                $scope.Corporate = false;
                $scope.CompanyFD = false;
                $scope.Rating_AAA = false;
                $scope.Rating_AA = false;
                $scope.Rating_A = false;
                $scope.selectedTenure = $scope.investPurpose.Tenure;
                $scope.selectedReturn = 0;
                if ($scope.investPurpose.RiskLevel === 0 && $scope.investPurpose.OnlyGsec === 1) {
                    $scope.Government = true;
                    $scope.selectedBondTypes.push("GFD");
                }
                else {
                    $scope.Government = true;
                    $scope.Corporate = true;
                    $scope.CompanyFD = true;
                }
                switch ($scope.investPurpose.RiskLevel) {
                    case 2:
                    {
                        $scope.Rating_A = true;
                        $scope.selectedRatings.push("A+");
                        $scope.selectedRatings.push("A");
                        $scope.selectedRatings.push("A-");
                    }
                    case 1:
                    {
                        $scope.Rating_AA = true;
                        $scope.selectedRatings.push("AA");
                        $scope.selectedRatings.push("AA+");
                        $scope.selectedRatings.push("AA-");
                        $scope.selectedRatings.push("FAA+");
                        $scope.selectedRatings.push("MAA+");
                        $scope.selectedRatings.push("FAA");
                        $scope.selectedRatings.push("MAA");
                        $scope.selectedRatings.push("FAA-");
                        $scope.selectedRatings.push("MAA-");
                    }
                    case 0:
                    default:
                    {
                        if ($scope.investPurpose.RiskLevel === 0 && $scope.investPurpose.OnlyGsec === 1) {
                            $scope.Rating_AAA = false;
                        } else {
                            $scope.Rating_AAA = true;
                            $scope.selectedRatings.push("AAA");
                            $scope.selectedRatings.push("FAAA");
                            $scope.selectedRatings.push("MAAA");
                        }
                    }
                    break;
                }
            }

            $scope.getCurrentRating = function ($event) {
                var checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');
                applyFilter.classList.remove('active');
                $scope.selectedRatings = [];
                for (var i = 0; i < checkedBoxes.length; i++) {
                    if (checkedBoxes[i].value === "Rating_AAA") {
                        $scope.selectedRatings.push("AAA");
                        $scope.selectedRatings.push("FAAA");
                        $scope.selectedRatings.push("MAAA");
                    } else if (checkedBoxes[i].value === "Rating_AA") {
                        $scope.selectedRatings.push("AA+");
                        $scope.selectedRatings.push("AA");
                        $scope.selectedRatings.push("AA-");
                        $scope.selectedRatings.push("FAA+");
                        $scope.selectedRatings.push("MAA+");
                        $scope.selectedRatings.push("FAA");
                        $scope.selectedRatings.push("MAA");
                        $scope.selectedRatings.push("FAA-");
                        $scope.selectedRatings.push("MAA-");
                    } else if (checkedBoxes[i].value === "Rating_A") {
                        $scope.selectedRatings.push("A+");
                        $scope.selectedRatings.push("A");
                        $scope.selectedRatings.push("A-");
                    }
                }
            }

            $scope.getBondType = function ($event) {
                var checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');
                applyFilter.classList.remove('active');
                $scope.selectedBondTypes = [];
                for (var i = 0; i < checkedBoxes.length; i++) {
                    if (checkedBoxes[i].value === "Government") {
                        $scope.selectedBondTypes.push("GFD");
                    } else if (checkedBoxes[i].value === "Corporate") {
                        $scope.selectedBondTypes.push("NCD");
                    } else if (checkedBoxes[i].value === "CompanyFD") {
                        $scope.selectedBondTypes.push("CFD");
                    }
                }
            }

            $scope.calculateRange = function () {
                applyFilter.classList.remove('active');
            }

            $scope.getPaymentFreq = function (freq) {
                retValue = "NA";
                if (freq === 0) {
                    retValue = "Cumulative";
                } else if (freq === 1) {
                    retValue = "Yearly";
                }else if (freq === 2) {
                    retValue = "Half-Yearly";
                }else if (freq === 4) {
                    retValue = "Quarterly";
                }else if (freq === 12) {
                    retValue = "Monthly";
                }
                return retValue;
            }

            $scope.getLTPText = function (index) {
                retValue = "Minimum Investment";
                if ($scope.filteredInstruments[index].BClass === "NCD") {
                    retValue = "LTP";
                }
                return retValue;
            }

            $scope.getInstrumentTypeText = function (index) {
                let retValue;
                if ($scope.filteredInstruments[index].BClass === "GFD") {
                    retValue = "Government Backed Securities";
                } else if ($scope.filteredInstruments[index].BClass === "CFD") {
                    retValue = "Corporate Fixed Deposits";
                } else {
                    retValue = "Corporate Debentures / Bonds";
                }
                return retValue;
            }

            $scope.applyFilter = function ($event) {
                var newFilteredData = [];
                applyFilter.classList.add('active');
                if ($scope.instruments != null) {
                    for (i=0; i<$scope.instruments.length; i++) {
                        if ($scope.instruments[i].Tenure > $scope.selectedTenure) {
                            continue;
                        }
                        if ($scope.instruments[i].YTM < $scope.selectedReturn) {
                            continue;
                        }
                        var j = 0;
                        if ($scope.selectedBondTypes.length > 0) {
                            for(; j<$scope.selectedBondTypes.length; j++) {
                                if ($scope.instruments[i].BClass === $scope.selectedBondTypes[j]) {
                                    break;
                                }
                            }
                            if (j >= $scope.selectedBondTypes.length) {
                                continue;
                            }
                        }
                        //rating matching is only for CFD and NCD type instruments
                        if ($scope.instruments[i].BClass === "CFD" || $scope.instruments[i].BClass === "NCD") {
                            j = 0;
                            if ($scope.selectedRatings.length > 0) {
                                for(; j<$scope.selectedRatings.length; j++) {
                                    if ($scope.instruments[i].Rating === $scope.selectedRatings[j]) {
                                        break;
                                    }
                                }
                                if (j >= $scope.selectedRatings.length) {
                                    continue
                                }
                            }
                        }
                        newFilteredData.push($scope.instruments[i]);
                    }
                }
                $scope.filteredInstruments = newFilteredData;
                if($scope.filteredInstruments.length > 0) {
                    $scope.noInstruments = null;
                } else {
                    $scope.noInstruments = "Sorry, no instruments found matching your criteria";
                }
            }

            $scope.addInstrumentsToOrderList = function (instrumentIndex) {
                if ($scope.filteredInstruments != null) {
                    OrderDetails
                        .create({
                            BClass: $scope.filteredInstruments[instrumentIndex].BClass,
                            BondName: $scope.filteredInstruments[instrumentIndex].BondName,
                            IssuerName: $scope.filteredInstruments[instrumentIndex].IssuerName,
                            MaturityDate: $scope.filteredInstruments[instrumentIndex].MaturityDate,
                            YTM: $scope.filteredInstruments[instrumentIndex].YTM,
                            BidPrice: $scope.filteredInstruments[instrumentIndex].LTP,
                            Units: 0,
                            Investment: 0,
                            MaturityAmount: 0,
                            CreditRating: $scope.filteredInstruments[instrumentIndex].CreditRatingStr,
                            Market: $scope.filteredInstruments[instrumentIndex].Market,
                            ReinvestmentYears: 0,
                            ForcastedMatAmount: 0,
                            FaceValue: $scope.filteredInstruments[instrumentIndex].FaceValue,
                            Tenure: $scope.filteredInstruments[instrumentIndex].Tenure,
                            customerId: $scope.currentUser.id
                        })
                        .$promise
                        .then(function (response) {
                        },
                        //error function, currently assuming only session timeout
                        function (result) {
                            alert("Session expired, please login again");
                            $rootScope.returnTo = {
                                state: "exploreInstruments",
                                params: null
                            };
                            $state.go('login');
                        }
                        );
                }
            }

            $scope.selectBond = function ($event, instrumentIndex) {
                var index = -1;
                for (i=0; i<$scope.addedBonds.length; i++) {
                    if ($scope.addedBonds[i] === instrumentIndex) {
                        index = i;
                        break;
                    }
                }

                if ($event.target.checked) {
                    if (index === -1) {
                        $scope.addedBonds.push(instrumentIndex);
                    }
                } else {
                    if (index != -1) {
                        $scope.addedBonds.splice(index, 1);
                    }
                }
            }

            $scope.addToOrderList = function () {
                for (i=0; i<$scope.addedBonds.length; i++) {
                    $scope.addInstrumentsToOrderList($scope.addedBonds[i]);
                }
                if ($scope.addedBonds.length == 0) {
                    alert("No instrument is selected to add to order list");
                }
                $scope.goToOrderSummary();
            }

            $scope.goToOrderSummary = function () {
                $state.go('orderSummary');
            }

        }]);
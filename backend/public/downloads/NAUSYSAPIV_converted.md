<!-- Pages 1 - 10 -->

# API Documentation v6 

Developed by:
Stratus IT d.o.o.
address: Selska 90a, 10000 Zagreb
phone: +385 16199140
e-mail:info@nausys.com
![img-0.jpeg](img-0.jpeg)

1. NauSYS API V6 Home ..... 5
1.1 Implementation guidelines ..... 5
1.2 ChangeLog ..... 6
1.3 Catalogue ..... 14
1.3.1 All cabins ..... 14
1.3.2 All charter bases ..... 15
1.3.3 All charter companies ..... 16
1.3.4 All countries ..... 18
1.3.5 All country states ..... 19
1.3.6 All discount items ..... 20
1.3.7 All engine builders ..... 21
1.3.8 All equipment ..... 25
1.3.9 All equipment categories ..... 25
1.3.10 All locations ..... 26
1.3.11 All Packages ..... 27
1.3.12 All price lists ..... 36
1.3.13 All price measures ..... 43
1.3.14 All regions ..... 44
1.3.15 All sail types ..... 45
1.3.16 All seasons ..... 46
1.3.17 All services ..... 48
1.3.18 All steering types ..... 49
1.3.19 All users ..... 50
1.3.20 All yacht builders ..... 50
1.3.21 All yacht categories ..... 51
1.3.22 All yachts ..... 52
1.3.23 All yachts model ..... 61
1.3.24 Single yacht ..... 62
1.4 Yacht reservation ..... 68
1.4.1 All reservations ..... 68
1.4.2 All options ..... 72
1.4.3 Free yacht ..... 80
1.4.4 Free yacht search criteria ..... 82
1.4.5 Free yachts search ..... 84
1.4.6 Occupancy ..... 86
1.4.7 Occupancy2 ..... 87
1.4.8 Free cabin package search criteria ..... 88
1.4.9 Free cabin package search ..... 89
1.4.10 Cabin Charter Occupancy ..... 93
1.4.11 Waiting Options ..... 95
1.4.12 Occupancy3 ..... 96
1.4.13 All Infos ..... 97
1.4.14 All stornos ..... 98
1.4.15 Storno waiting option ..... 102
1.5 Booking ..... 103
1.5.1 Create booking ..... 103
1.5.2 Create cabin charter booking ..... 104
1.5.3 Create cabin charter info ..... 106
1.5.4 Create cabin charter option ..... 109

1.5.5 Create info ..... 111
1.5.6 Create option ..... 112
1.5.7 Online payment ..... 114
1.5.8 Online payment plan ..... 115
1.5.9 Storno option ..... 116
1.6 Crew list ..... 117
1.6.1 ENUM constraints ..... 117
1.6.2 Get ..... 118
1.6.3 Set ..... 119
1.7 Invoices ..... 120
1.7.1 Get Invoices ..... 120
1.8 Contacts ..... 123
1.8.1 Create contact ..... 123
1.8.2 Get all contacts ..... 124
1.8.3 Get all contacts 2 ..... 125
1.8.4 Get contact ..... 126
1.8.5 Get crew member ..... 127
1.8.6 Merge contact ..... 127
1.8.7 Update contact ..... 128
1.9 Data structures ..... 129
1.9.1 AllYachtsRequest ..... 129
1.9.2 Data Types ..... 130
1.9.3 Discount ..... 130
1.9.4 InvoicesRequest ..... 130
1.9.5 Period ..... 131
1.9.6 RestAdditionalDiscountltem ..... 131
1.9.7 RestAuthentication ..... 131
1.9.8 RestBankAccount ..... 132
1.9.9 RestCabinCharterOccupancy ..... 132
1.9.10 RestCabinCharterOccupancyPeriod ..... 133
1.9.11 RestCabinCharterYacht ..... 134
1.9.12 RestCabinCharterYachtSeason ..... 138
1.9.13 RestCabinDefinition ..... 145
1.9.14 RestCabinDefinitionList ..... 145
1.9.15 RestCabinOccupancy ..... 146
1.9.16 RestCabinPackage ..... 147
1.9.17 RestCabinPackageAllocation ..... 157
1.9.18 RestCabinPackageDayltinerary ..... 159
1.9.19 RestCabinPackageDescription ..... 160
1.9.20 RestCabinPackageltinerary ..... 163
1.9.21 RestCabinPackageList ..... 165
1.9.22 RestCabinPackagePicture ..... 174
1.9.23 RestCabinPackageYachtCabin ..... 174
1.9.24 RestCabinPriceList ..... 175
1.9.25 RestCabinPriceListColumn ..... 177
1.9.26 RestCabinPriceListPeriod ..... 178
1.9.27 RestCabinPriceListPrice ..... 178
1.9.28 RestCabinPriceListRow ..... 179
1.9.29 RestCabinRequest ..... 180
1.9.30 RestCabinReservation ..... 181
1.9.31 RestCabinReservationInfoRequest ..... 183
1.9.32 RestCabinReservationPriceInfo ..... 185
1.9.33 RestCharterBase ..... 186
1.9.34 RestCharterBaseList ..... 187
1.9.35 RestCharterCompany ..... 188
1.9.36 RestCharterCompanyList ..... 189
1.9.37 RestClient ..... 190
1.9.38 RestClient2 ..... 191
1.9.39 RestClientList ..... 193
1.9.40 RestComment ..... 194
1.9.41 RestCountry ..... 194
1.9.42 RestCountryList ..... 195
1.9.43 RestCountryState ..... 196
1.9.44 RestCountryStateList ..... 196
1.9.45 RestCrewList ..... 197
1.9.46 RestDiscount ..... 199
1.9.47 RestDiscountltem ..... 200
1.9.48 RestDiscountltemList ..... 200
1.9.49 RestEngineBuilder ..... 201
1.9.50 RestEngineBuilderList ..... 201
1.9.51 RestEquipment ..... 202
1.9.52 RestEquipmentCategory ..... 202

|  1.9.53 RestEquipmentCategoryList | 203  |
| --- | --- |
|  1.9.54 RestEquipmentList | 203  |
|  1.9.55 RestEuminia | 204  |
|  1.9.56 RestFreeCabin | 204  |
|  1.9.57 RestFreeCabinPackage | 207  |
|  1.9.58 RestFreeCabinPackageList | 209  |
|  1.9.59 RestFreeCabinPackagePeriod | 212  |
|  1.9.60 RestFreeCabinPackageSearchCriteria | 213  |
|  1.9.61 RestFreeCabinPackageSearchRequest | 214  |
|  1.9.62 RestFreeYacht | 215  |
|  1.9.63 RestFreeYachtList | 217  |
|  1.9.64 RestFreeYachtsRequest | 219  |
|  1.9.65 RestFreeYachtsSearchCriteria | 222  |
|  1.9.66 RestFreeYachtsSearchRequest | 223  |
|  1.9.67 RestFreeYachtsSearchResponse | 224  |
|  1.9.68 RestGetContactsRequest | 226  |
|  1.9.69 RestGroupPolicy | 227  |
|  1.9.70 RestInternationalText | 227  |
|  1.9.71 RestInvoice | 228  |
|  1.9.72 RestInvoiceItem | 229  |
|  1.9.73 RestInvoiceItemDiscount | 230  |
|  1.9.74 RestInvoiceItemDiscounts | 230  |
|  1.9.75 RestInvoiceItems | 230  |
|  1.9.76 RestInvoicesExport | 230  |
|  1.9.77 RestInvoicesRequest | 232  |
|  1.9.78 RestInvoiceSummary | 233  |
|  1.9.79 RestInvoiceVat | 233  |
|  1.9.80 RestInvoiceVatItem | 233  |
|  1.9.81 RestLocation | 233  |
|  1.9.82 RestLocationList | 234  |
|  1.9.83 RestMergeClientRequest | 235  |
|  1.9.84 RestOccupancyList | 235  |
|  1.9.85 RestOneWayPeriod | 237  |
|  1.9.86 RestOnlinePaymentPlan | 238  |
|  1.9.87 RestPassenger | 238  |
|  1.9.88 RestPayment | 240  |
|  1.9.89 RestPaymentPlan | 240  |
|  1.9.90 RestPriceList | 240  |
|  1.9.91 RestPriceListColumn | 244  |
|  1.9.92 RestPriceListList | 245  |
|  1.9.93 RestPriceListPeriod | 248  |
|  1.9.94 RestPriceListRow | 248  |
|  1.9.95 RestPriceMeasure | 249  |
|  1.9.96 RestPriceMeasureList | 249  |
|  1.9.97 RestRegion | 250  |
|  1.9.98 RestRegionList | 250  |
|  1.9.99 RestResponse | 251  |
|  1.9.100 RestSailType | 252  |
|  1.9.101 RestSailTypeList | 252  |
|  1.9.102 RestSeason | 253  |
|  1.9.103 RestSeasonList | 254  |
|  1.9.104 RestService | 255  |
|  1.9.105 RestServiceList | 255  |
|  1.9.106 RestStatus | 256  |
|  1.9.107 RestSteeringType | 257  |
|  1.9.108 RestSteeringTypeList | 257  |
|  1.9.109 RestUser | 258  |
|  1.9.110 RestUserList | 259  |
|  1.9.111 RestWaitingOptionsRequest | 259  |
|  1.9.112 RestWaitingOptionsResponse | 260  |
|  1.9.113 RestWarehouseTransferCreateRequest | 261  |
|  1.9.114 RestWarehouseTransferListRequest | 262  |
|  1.9.115 RestWarehouseTransferListResponse | 262  |
|  1.9.116 RestWarehouseTransferResponse | 262  |
|  1.9.117 RestYacht | 263  |
|  1.9.118 RestYachtAdditionalEquipmentPrice | 271  |
|  1.9.119 RestYachtBuilder | 272  |
|  1.9.120 RestYachtBuilderList | 273  |
|  1.9.121 RestYachtCabinDefinition | 273  |
|  1.9.122 RestYachtCategory | 275  |
|  1.9.123 RestYachtCategoryList | 275  |
|  1.9.124 RestYachtCheckInPeriod | 276  |

|  1.9.125 | RestYachtCrewMember | 278  |
| --- | --- | --- |
|  1.9.126 | RestYachtEquipment | 278  |
|  1.9.127 | RestYachtList | 279  |
|  1.9.128 | RestYachtMaintenanceMaterialCost | 285  |
|  1.9.129 | RestYachtMaintenanceWorkingHours | 286  |
|  1.9.130 | RestYachtModel | 286  |
|  1.9.131 | RestYachtModelList | 287  |
|  1.9.132 | RestYachtPicture | 288  |
|  1.9.133 | RestYachtPrice | 289  |
|  1.9.134 | RestYachtReservation | 289  |
|  1.9.135 | RestYachtReservationAdditionalEquipment | 292  |
|  1.9.136 | RestYachtReservationBookingRequest | 294  |
|  1.9.137 | RestYachtReservationExportRequest | 295  |
|  1.9.138 | RestYachtReservationExtra | 296  |
|  1.9.139 | RestYachtReservationInfoRequest | 297  |
|  1.9.140 | RestYachtReservationList | 299  |
|  1.9.141 | RestYachtReservationOccupancy | 301  |
|  1.9.142 | RestYachtReservationOccupancyList | 302  |
|  1.9.143 | RestYachtReservationOnlinePaymentRequest | 303  |
|  1.9.144 | RestYachtReservationOnlinePaymentResponse | 304  |
|  1.9.145 | RestYachtReservationOptionRequest | 305  |
|  1.9.146 | RestYachtReservationPayment | 305  |
|  1.9.147 | RestYachtReservationPaymentPlan | 306  |
|  1.9.148 | RestYachtReservationPricelinfo | 307  |
|  1.9.149 | RestYachtReservationRequest | 307  |
|  1.9.150 | RestYachtReservationService | 308  |
|  1.9.151 | RestYachtReservationsRequest | 310  |
|  1.9.152 | RestYachtSeason | 312  |
|  1.9.153 | RestYachtServicePrice | 315  |
|  1.9.154 | VatItem | 317  |

# NauSYS API V6 Home 

Expand all Collapse all

## Implementation guidelines

## Requirements

1. A local database on your server needs to be created. This database is used to store all catalogue information which you receive from NauSYS server through API.
2. Your local database will be populated with the catalogue data from the API. Catalogue data is the main dictionary of primary data used in other complex structures like YachtReservation.
3. Your local database with catalogue data is preferred to be synchronised once per day during night hours after 01:00 AM (GMT +1 )
4. It is recommended to make synchronisation of occupancy more often, like once per hour or every few hours.
5. You are free to manipulate data structures on your side as needed for your purposes.
6. API calls to NauSYS must be executed sequentially (next after the previous finishes), this means one per one and not multiple requests at the same time (parallel multi threads are not allowed)

## Functional service groups

NauSYS web services are divided into five groups:

1. Catalogue - used to pull all information needed to make mappings between NauSYS and your system.
2. Yacht reservation - used to get yours bookings/options or to make enquiry which yacht is available in certain period or to get all occupancy list of fleets.
3. Booking - used to make new option/booking or cancel existing ones.
4. Crew list - used to receive existing information about crewlist on the reservation or to make an update on crewlist like adding passengers or change data.
5. Sales actions - used to receive information about special actions like ten days charter, Wednesday to Wednesday charter or short periods (less than a week long charters) or any normal action like last minute or early booking offers.

## Implementation scenarios

There are several different implementation scenarios based on your functional requirements during the implementation. Scenarios are different by the level of implementation and complexity. Therefore, we differ three scenarios:

1. Basic implementation is the most dependant type of implementation because it is relying completely on NauSYS
2. Advanced implementation is less dependant comparing to Basic implementation, but still requires constant interaction with NauSYS to work properly
3. Full implementation is almost independant

These scenarios depend on the desired level independence and client's needs.
( In all scenarios it is mandatory to make copy of all catalogue data in your local database. This will make your implementation and further use of the data much more easier.

| Impementation scenario | Basic | Advanced | Full |
| :-- | :-- | :-- | :-- |
| Local copy of all catalogue <br> data | $\boldsymbol{\Theta}$ | $\boldsymbol{\Theta}$ | $\boldsymbol{\Theta}$ |
| Match yachts with desired <br> search criteria | using API web-service Free <br> yachts search | using local database (desirabl <br> e if you want to make more <br> detailed search engine to <br> match yachts with more <br> criteria than we have in <br> web-service Free yachts <br> search) | using local database <br> (desirable if you want to make <br> more detailed search engine <br> to match yachts with more <br> criteria than we have in <br> web-service Free yacht) |

| Check if yacht is available | using API web-service Free yachts search | using API web-service Free yacht | using local database which has most recent occupancy updated of all fleets (advantage is that your system will work properly even when NauSYS is not responsive during maintenance time or any technical issues which may appear) |
| :--: | :--: | :--: | :--: |
| Synchronisation of the prices | $\mathbf{x}$ | $\mathbf{x}$ | once per day copy to local database using API web-service Free yacht |
| Synchronisation of the occupancy | $\mathbf{x}$ | $\mathbf{x}$ | multiple times during the day using API web-service Occupa ncy or Occupancy2 |
| Create options/bookings directly through API | $\mathbf{x}$ | using API web-service Bookin g group | using API web-service Bookin g group |
| Operate crew-lists over API | $\mathbf{x}$ | using API web-service Crew list group | using API web-service Crew list group |

# ChangeLog 

| Date | Change | Note |
| :--: | :--: | :--: |
| 05.03.2025 | field "checkIn","checkOut" added to RestF reeYacht |  |
| 28.01.2025 | Added "numberOfGuests" field to RestFre eCabinPackageSearchRequest | Expected number of guests |
| 28.11.2024 | New endpoint: Storno waiting option | Cancels a waiting option |
| 24.10.2024 | Added "extendedDataSet" field to RestFre eCabinPackageSearchRequest <br> Added "obligatoryExtras" field to RestFre eCabin | Include obligatory extras in response <br> Show all obligatory extras from the booking |
| 21.10.2024 | Added "onSale" field to RestYacht <br> Added "fallbackToWaitingOption" field to RestYachtReservationOptionRequest | Define if the yacht is available for buying |
| 15.10.2024 | Added "language" field to RestClient | Possibility to define client language when creating booking over api, /createInfo |
| 17.09.2024 | Added "onlineBooking" field to RestYacht Reservation | Only visible to charter companies |
| 06.08.2024 | Added "totalPrice" field to RestYachtRese rvationExtra | Total calculated price for additional extras |
| 12.06.2024 | Added field to RestYacht: <br> - registrationNumber | Visible only to charter companies |
| 24.04.2024 | New endpoint: Get crew member <br> Request: RestAuthentication <br> Response: RestYachtCrewMember |  |

|  24.04.2024 | Added field to RestYacht <br> Added fields: <br> - crewCount <br> - crewMemberslds |   |
| --- | --- | --- |
|  13.03.2024 | Added lastModifyTime field to RestClient 2 |   |
|  07.03.2024 | Added fields to RestYacht <br> Added fields: <br> - maxDiscountFromCommission <br> - agencyDiscountType | Fields only available to agencies  |
|  07.03.2024 | New endpoint: Get all contacts 2 <br> Request: RestGetContactsRequest <br> Response: RestClientList <br> Added DTO: <br> - RestGetContactsRequest | Get contacts $->$ client/v6/contact/all2  |
|  26.02.2024 | Added fields to RestYachtReservation: <br> - cookld <br> - sailorld |   |
|  12.02.2024 | Added fields to RestUser: <br> - googleEmailStatus <br> - googleEmail | googleEmail -> google account user has linked his account with googleEmailStatus values: <br> - LINKED -> The user's Google account is linked with the email address specified. <br> - EMAIL_MISMATCH -> The Google account is linked using an email address that is different from the one specified in the "email" field. <br> - NOT_LINKED -> The user's Google account is not linked with any email address provided.  |
|  30.01.2024 | Added RestCabinPackagePicture to RestC abinPackage |   |
|  18.01.2024 | Added fields showers,showersCrew to Re stYacht |   |
|  17.01.2024 | Added fields to RestYachtPicture: <br> - isGenuine <br> - description <br> - lastModified |   |

|  17.01.2024 | New endpoint: Get Invoices <br> Request: RestInvoicesRequest <br> Response: RestInvoicesExport <br> Added DTO's: <br> - RestInvoice <br> - RestInvoiceSummary <br> - RestInvoiceVat <br> - RestInvoiceVatItem <br> - RestInvoiceltems <br> - RestInvoiceltem <br> - RestInvoiceltemDiscounts <br> - RestInvoiceltemDiscount | Get invoices $->$ sales/v6/invoices/  |
| --- | --- | --- |
|  02.01 .2024 | added <br> fields disabledDate,openBaseDate,closed BaseDate to RestCharterBase |   |
|  03.11 .2023 | added "pictures" array to RestYacht | contains RestYachtPicture data  |
|  27.09 .2023 | added Merge contact and RestMergeClie ntRequest |   |
|  08.08 .2023 | returnToBaseNote and returnToBaseDelayNote added to RestCh arterBase |   |
|  27.07 .2023 | percentageCalculationType field added to <br> RestYachtServicePrice, RestYachtAddition alEquipmentPrice, RestYachtReservationService, RestYachtR eservationAdditionalEquipment | Values:
DAILY_PRICE,
PRICELIST_PRICE_WITHOUT_VAT  |
|  14.07 .2023 | added checkInTime,checkOutTime to Res tYacht |   |
|  10.07 .2023 | added field extrasType to RestYachtRese rvationExtra | Define if extras is SERVICE or EQUIPMENT  |
|  06.07 .2023 | added filed quantityExtras and quantityPriceMeasure to RestYachtReserv ationService and RestYachtReservationAd ditionalEquipment | quantity field is now deprecated. Superseded by the new fileds.  |
|  04.07 .2023 | added field agencyGroup to RestRevbellB ooking |   |
|  28.06 .2023 | added field highlightsIntText and noteIntText to RestYacht | on all languages highlights and note  |
|  20.06 .2023 | added recommendedPersons to RestYach $t$ |   |
|  20.06 .2023 | added "numberOfGuests" field to RestYac htReservationInfoRequest and RestYacht Reservation response | Optional parameter  |
|  15.06 .2023 | added field dicountedPrice and discountAmount to RestRevbellPrice List |   |
|  14.06 .2023 | Updated field description for extendedDataSet in RestFreeYachtsRe quest | Changed the request and response logic for the extendedDataSet field in RestFree YachtsRequest
Please see RestFreeYachtsRequest descri ption for more details.  |
|  14.06 .2023 | add field isPremium to RestYacht |   |

|  14.06.2023 | add field isPremium to RestCharterCompany |   |
| --- | --- | --- |
|  09.06.2023 | add field belongsTo to RestClient2 |   |
|  31.05.2023 | added fields createdByld, createdTime and modifiedAt to both RestYachtReserv ationService and RestYachtReservationAd ditionalEquipment |   |
|  15.05.2023 | add field "subFleet" to Yacht export |   |
|  15.05.2023 | add field to "reservationType" to Capacity | if there is some reservation type on that date than value is
- B $\rightarrow$ block reservation
- $\mathrm{O} \rightarrow$ out of service
- $\mathrm{T} \rightarrow$ transfer reservation
- A $\rightarrow$ everything else  |
|  15.05.2023 | add field "ownerWeek" to Booking list | Used by RevBell  |
|  26.04.2023 | field "agencyCommission" added to Rest YachtReservationPriceInfo | Amount of agency commission defined between fleet operator and broker  |
|  24.04.2023 | fields "fuelConsumption", "maxSpeed" and "crusingSpeed" added to RestYacht |   |
|  20.04.2023 | field "onPending" added to RestYachtRes ervationAdditionalEquipment | It is presented when equipment is added on INFO or OPTION status, and that equipment has defined quantity in season, and while it is in status "on pending" it will not be calculated in the charter price, so it is only shown for informative purposes, but in BOOKING stage "on pending" status will be removed and calculated in charter price if possible.  |
|  04.04.2023 | field "basisName" added to Capacity |   |
|  24.03.2023 | fields "agencyClient", "skipperld" and "hostessId" added to RestYachtReservatio n | Only visible for charter companies  |
|  17.03.2023 | Created new endpoints for extracting base location, booking, pricelist price and yacht info
Capacity, Booking list, Price list, Yacht export | Used by RevBell to share data.  |
|  14.03.2023 | added "embarkmentDate" and "disembarkmentDate" to RestPassenger |   |
|  28.02.2023 | added field "comments" to RestYachtRes ervation | Deprecates
"restYachtReservationComments" in Rest YachtReservation  |
|  27.02.2023 | added description of parameter "currency" to RestFreeYachtsSearchReque st |   |
|  24.02.2023 | add description of parameter "currency" to RestFreeYachtsRequest |   |
|  20.02.2023 | add field "id" to RestComment |   |
|  17.02.2023 | add field "securityDeposit" to RestYachtR eservation |   |
|  17.02.2023 | add field "totalPrice" to RestYachtReserva tionService and RestYachtReservationAdd itionalEquipment | Total calculated price for service and additional equipment  |

|  16.02.2023 | RestAdditionalDiscountltem parameter added to RestYachtReservationInfoReque st (Only for Charter companies) | enables adding discount upon info creation  |
| --- | --- | --- |
|  15.02.2023 | add field
"restYachtReservationComments" to Res tYachtReservation | comments on reservation that are visible to user  |
|  14.02.2023 | add field "realization" to RestYachtRese rvation | only for NAT company  |
|  14.02.2023 | add field
"effectiveAgencyCommissionAmountWith outVAT" to RestYachtReservation | agency booking  |
|  10.02.2023 | add field "company" to RestClient2 | default value false  |
|  21.01.2023 | add "overrideClientData" parameter to Re stYachtReservationInfoRequest | If client already exist gives possibility to override his personal information.  |
|  11.01.2023 | added "displayCurrency" parameter to several request structures | RestYachtReservationInfoRequest
RestYachtReservationOptionRequest
RestYachtReservationRequest
RestYachtReservationBookingRequest
RestYachtReservationRequest
RestYachtReservationOnlinePaymentReq uest
RestCabinReservationInfoRequest
RestYachtReservationsRequest  |
|  28.11.2022 | onRequestOnly field added to RestYachtS ervicePrice | If true service is available only on YachtReservation type: (Reservation Type: RESERVATION)  |
|  10.11.2022 | Updated status field in *RestUpsertYacht MaintenanceRequest | possible values: OPEN, IN_PROGRESS, WAITING_FOR_REPLY, WAITING_SUPPLY, CLOSED or VERIFIED  |
|  02.09.2022 | domainld field added to RestYachtReserv ation
added new endpoint to catalogue - All domains | only visible to charter company  |
|  31.08.2022 | New fields added to RestCharterBase | baseManagerld, domainld, secondaryBase, disabled  |
|  24.08.2022 | All infos endpoint added |   |
|  19.08.2022 | added minDuration and maxDuration to RestYachtServicePrice, RestYachtAddition alEquipmentPrice and RestYachtReservati onExtra | fields define reservation duration range in days for which extras will be available  |
|  18.08.2022 | added lastModifiedAt to RestYachtReserv ation |   |
|  18.08.2022 | RestYachtReservationsRequest
added modifyTimeFrom and modifyTimeTo
documentation correction: if reservation parameter (ids) sent, all sent date parameters ignored (the search uses id-s filter), otherwise the search uses dates filter (if all sent date parameters are valid). | All Reservations and All Options can now be filtered by modify time period (modifyTimeFrom and modifyTimeTo). This last modify time period can be combined with start date period and end date period.  |

<!-- Pages 11 - 20 -->

|  18.08.2022 | change of logic for All reservations and A II Options request: <br> endDateFrom and endDateTo (end date period) can now be combined with period fromFrom and periodTo (start date period) |   |
| --- | --- | --- |
|  18.08.2022 | added bookingTypes to RestFreeYachtsS earchRequest | possible values: BAREBOAT, CREWED  |
|  26.07.2022 | added fuelType and engineBuildYear to R estYacht | It defines fuel type and engine build year  |
|  08.07.2022 | added minimumShortPeriodDuration to R estYachtCheckInPeriod | it defines whats the minimum reservation length if there is a gap between 2 reservations (which is less than minimalReservationDuration)  |
|  10.07.2022 | added currency to RestFreeCabinPackage SearchRequest | outputs all prices in preffered currency  |
|  23.05.2022 | All users endpoint added <br> - RestUserList added <br> - RestUser added <br> - RestGroupPolicy added | used for fetching user data such as ids, emails and group policies for a charter company  |
|  17.05.2022 | extendedDataSet in RestFreeYachtsRequ est expanded with additional possible value "ADDITIONAL_EXTRAS" fields "serviceIDs", and "equipmentIDs" added to RestFreeYachtsRequest <br> field "totalPriceWithExtras" added to Rest FreeYacht <br> array "additionalExtras" added to RestFre eYacht | New functionallity gives you possibility to request FreeYachts with included additional extras. <br> It's required to add "ADDITIONAL_EXTRAS" to "extendedDataSet" and specify extras IDs that you request  |
|  10.05.2022 | disabledPerson and shoeSize field added to RestPassenger |   |
|  09.05.2022 | increased decimal places for amount that is percentage in RestYachtServicePrice an d RestYachtAdditionalEquipmentPrice | Increased decimal places number from 2 to 4 for amount displayed in percentage  |
|  02.05.2022 | occupancy3 endpoint added | Used to fetch a single yacht occupancy  |
|  15.04.2022 | depositWhenInsured field added to RestY acht | visible when different from regular "deposit". To be used as deposit when deposit reduction service is added to reservation  |
|  06.04.2022 | id added to RestWaitingOptionsResponse <br> queuePosition added to RestWaitingOpti onsResponse | reservation id <br> position in waiting line ( $1=$ first, $2=$ second etc.)  |
|  03.03.2022 | code2 added to RestCountry | short string representation of country ISO 3166 Alpha 2  |
|  01.03.2022 | endDateFrom and endDateTo added to R estYachtReservationsRequest | min and max value for check-out date, and can't be combined with periodFrom and periodTo  |
|  24.02.2022 | bookingType field added to RestYachtRe servation | possible values: <br> "BAREBOAT","CREWED","CABIN_MAIN","C ABIN_SUB","TRANSFER","BLOCK"  |
|  17.02.2022 | crewedCharterType field added to RestYa cht |   |

|  01.02.2022 | ignoreOptions flag added to: RestFreeYa chtsRequest, RestFreeYachtsSearchReque st, RestFreeCabinPackageSearchRequest status added to: RestFreeYacht | ignoreOptions will include periods under option. <br> status gives you information whether period is FREE or UNDER_OPTION (so you can place waiting option)  |
| --- | --- | --- |
|  10.01 .2022 | extendedDataSet field added to RestFree YachtsRequest <br> extendedDataSet field added to RestFree YachtsSearchRequest <br> obligatoryExtras field added to RestFreeY acht <br> depositAmount field added to RestYacht ReservationPriceInfo <br> depositWhenInsuredAmount field added to RestYachtReservationPriceInfo <br> includeExtendedDataSet field in RestFree YachtsSearchRequest and RestFreeYachts Request is marked as deprecated, please use extendedDataSet field. | More information on those fields is available in the structure description  |
|  29.12.2021 | New endpoint for exporting contacts Get all contacts |   |
|  22.12.2021 | Added id of pricelist in RestYachtPrice | Used to fetch id of pricelist  |
|  14.12.2021 | Created new endpoints for Creating, Reading and Updating contacts. <br> Create contact, Update contact, Update contact | Used to manage CRM contacts through API.  |
|  06.12.2021 | currency field added to RestCabinReserv ationPriceInfo | Define currency of prices.  |
|  16.11.2021 | includeExtendedDataSet field added to R estFreeYachtsRequest and RestFreeYacht sSearchRequest | Flag for exporting payment plans in response.  |
|  12.11.2021 | paymentPlans field added to RestFreeYac ht type of RestPaymentPlan date, percentage added to RestPaymentP lan |   |
|  21.10.2021 | onlyIDs, yachtIDs field added to AllYacht sRequest <br> yachtIDs field added to RestYachtList <br> virtualLength field added to RestYachtMo del | More information on those fields is available in the structure description  |
|  10.08.2021 | Added new API endpoing Waiting Options | Used for getting number of waiting options on boat in given period  |
|  21.07.2021 | Field: periods added to RestFreeYachtsRe quest |   |
|  14.05.2021 | Fields: validPeriodFrom, validPeriodTo, validMinPax, validMaxPax, validForBases, minimumPrice added to RestYachtServic ePrice <br> Fields: validForBases, minimumPrice added to RestYachtAdditionalEquipment Price | Please read more about those fields in the structure description  |
|  23.03.2021 | boatType field added to RestFreeYachtsS earchRequest |   |

|  10.03.2021 | ownerBooking field added to RestYachtR eservation <br> agencyAdditionalDiscountAmount field added to RestYachtReservation agencyClientFinalPrice field added to Res tYachtReservation |   |
| --- | --- | --- |
|  12.11 .2020 | agencyClientDiscountAmount field added to RestYachtReservationInfoRequest agencyClientDiscountAmountType field added to RestYachtReservationInfoReque st | only v6 <br> used only by agency  |
|  20.03.2020 | RestYachtCheckInPeriod field added to R estYacht | Periods during which the boat is bookable on specific days of week for specific minimal duration  |
|  19.02.2020 | numberOfRudderBlades field added to Re stYacht <br> engineBuilderId field added to RestYacht <br> hullColor field added to RestYacht <br> thirdPartyInsuranceAmount field added to RestYacht <br> thirdPartyInsuranceCurrency field added to RestYacht <br> All engine builders endpoint added to catalog | e.g. URL:http://ws.nausys.com/CBMS-ex ternal/rest/catalogue/v6/engineBuilders  |
|  07.02.2020 | companyName field added to RestCharte rCompany |   |
|  16.01.2020 | catalog has an endpoint for fetching data of a single yacht | e.g. URL:http://ws.nausys.com/CBMS-ex ternal/rest/catalogue/v6/yacht/103152  |
|  08.01.2020 | possibility to select yacht image size by using additional " $h$ " and/or " $w$ " parameters in yacht pictures endpoint | via separate requests on URLs: "mainPict ureUrl" and "picturesURL" (fields in RestY achtList and RestYacht), <br> e.g. https://ws.nausys.com/CBMS-exter nal/rest/yacht/103152/pictures/main.jp $\mathrm{g} ? \mathrm{w}=600$  |
|  18.12.2019 | textSE field added to RestInternationalTe $x t$ <br> textNO field added to RestInternationalT ext |   |
|  02.08.2019 | includeWaitingOptions field added to Res tYachtReservationsRequest |   |
|   | added fetch waiting options with All options | works if "includeWaitingOptions": true is in request  |
|   | added ability to remove waiting option with Storno option |   |
|  11.06.2019 | useDepositPayment field added to RestY achtReservationsRequest | default $=$ false <br> used only by charter company  |
|   | numberOfPayments field added to RestY achtReservationsRequest | used only by charter company  |
|   | useDepositPayment field added to RestY achtReservation |   |

|  | numberOfPayments field added to RestY <br> achtReservation |  |
| :-- | :-- | :-- |
| 22.05.2019 | textRU field added to RestInternationalTe <br> xt |  |
|  | textCZ field added to RestInternationalTe <br> xt |  |
|  | textFR field added to RestInternationalTe <br> xt |  |
|  | textPL field added to RestInternationalTe <br> xt |  |
|  | textSK field added to RestInternationalTe <br> xt |  |
|  | textNL field added to RestInternationalTe <br> xt |  |
|  | textES field added to RestInternationalTe <br> xt |  |
| 07.10 .2019 | baseld field added to RestYachtSeason |  |
|  | locationld field added to RestYachtSeaso <br> n |  |
| 27.10 .2019 | amount field added to: <br> RestYachtServicePrice, RestYachtAddition <br> alEquipmentPrice, <br> RestYachtReservationService, RestYachtR <br> eservationAdditionalEquipment | Can be absolute value or percentage of <br> price |
|  | amountlsPercentage field added to <br> RestYachtServicePrice, RestYachtAddition <br> alEquipmentPrice, <br> RestYachtReservationService, RestYachtR <br> eservationAdditionalEquipment | Boolean |
|  | percentageCalculationType field added <br> to <br> RestYachtServicePrice, RestYachtAddition <br> alEquipmentPrice, <br> RestYachtReservationService, RestYachtR <br> eservationAdditionalEquipment | Values: <br> PRICELIST_PRICE <br> CLIENT_PRICE <br> AGENCY_PRICE |
|  | listPrice field is now deprecated in <br> RestYachtServicePrice, RestYachtAddition <br> alEquipmentPrice, | replaced by amount |
|  | price field is now deprecated in <br> RestYachtReservationService, RestYachtR <br> eservationAdditionalEquipment | replaced by amount |
| 07.11 .2019 | oneWayPeriods field added to RestYacht |  |

# Catalogue 

## All cabins

| Params | Values |
| :-- | :-- |
| Description: | Provides all available yachts from requested charter company |
| Consumes: | JSON (content type: application/json) |

| Produces: | JSON (content type: application/json) |
| :-- | :-- |
| URL: | https://ws.nausys.com/CBMS-external/rest/catalogue/v6/cab <br> ins/[charterCompanyId] |
| Request method: | POST |
| Request structure: | RestAuthentication |
| Response structure: | RestCabinList |

# Example 

URL:https://ws.nausys.com/CBMS-external/rest/catalogue/v6/cabins/102701

## POST param:

```
{
    "username":"XXXXXX@XXX",
    "password":"XXXXXXXXXXX"
}
```

Response:

```
{
    "status": "OK",
    "cabins": [
        {
        "id": 10279571,
        "cabinPosition": "REAR",
        "cabinType": "DOUBLE"
    },
    {
        "id": 10279572,
        "cabinPosition": "FRONT",
        "cabinType": "DOUBLE_PLUS_SINGLE"
    },
    {
        "id": 10174571,
        "cabinPosition": "FRONT",
        "cabinType": "DOUBLE"
    }
    ]
}
```

## All charter bases

| Params | Values |
| :-- | :-- |
| Description: | Provides all available charter bases |
| Consumes: | JSON (content type: application/json) |

| Produces: | JSON (content type: application/json) |
| :-- | :-- |
| URL: | https://ws.nausys.com/CBMS-external/rest/catalogue/v6/cha <br> rterBases |
| Request method: | POST |
| Request structure: | RestAuthentication |
| Response structure: | RestCharterBaseList |

# Example 

URL:https://ws.nausys.com/CBMS-external/rest/catalogue/v6/charterBases

## POST param:

```
{
    "username":"XXXXXX@XXX",
    "password":"XXXXXXXXXXX"
}
```

Response:

```
{"status": "OK",
    "bases": [
        {
            "id": 110527,
            "locationId": 51,
            "companyId": 110525,
            "disabled" : false,
            "checkInTime": "17:00",
            "checkOutTime": "08:00",
            "lat": 44.8726,
            "lon": 13.84513
        },
        {
            "id": 579212,
            "locationId": 133729,
            "companyId": 110525,
            "disabled" : false,
            "checkInTime": "17:00",
            "checkOutTime": "08:00",
            "lat": 45.53419,
            "lon": 13.65292
        },
        {
        "id": 110529,
            "locationId": 60,
            "companyId": 110525,
            "disabled" : false,
            "checkInTime": "17:00",
            "checkOutTime": "08:00",
            "lat": 44.05391,
            "lon": 15.29812
        }
    ]
}
```

## All charter companies

| Params | Values |
| :-- | :-- |
| Description: | Provides all available charter companies |

| Consumes: | JSON (content type: application/json) |
| :-- | :-- |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/catalogue/v6/cha <br> rterCompanies |
| Request method: | POST |
| Request structure: | RestAuthentication |
| Response structure: | RestCharterCompanyList |

# Example 

URL:https://ws.nausys.com/CBMS-external/rest/catalogue/v6/charterCompanies
POST param:
\{
"username":"XXXXXX@XXX",
"password":"XXXXXXXXXXX"
\}
Response:
\{
"status": "OK",
"companies": [
\{
"id": 110525,
"name": "Burin Yacht Charter d.o.o",
"address": "Marina Dalmacija 1, Bibinje-Sukošan 
23206 Sukošan",
"city": "Sukošan",
"zip": "23206 ",
"countryld": 1,
"phone": "+ 38523394410",
"fax": "+ 38523394411",
"mobile": "+38630643 033",
"vatcode": "45576210409",
"web": "www.burinyachtcharter.com",
"email": "booking@burinyachtcharter.com",
"pac": false,
"bankAccounts": [
{
"bankName": "Zagrebačka banka d.d. Zagreb",
"bankAddress": "Paromlinska 2, 10000 Zagreb",
"accountNumber": "2142345345",
"swift": "12314234",
"iban": "324564526453 453665"
↑,
{
"bankName": "Zagrebačka banka d.d. Zagreb",
"bankAddress": "Paromlinska 2, 10000 Zagreb",
"accountNumber": "2360000-234235535"
↑
↑
↑
↑
↑
"id": 100553,
"name": "Way Point Rovinj - Pula/Marine Media d.o.o.",
"address": "",
"city": "Rijeka",
"zip": "51000",
"countryld": 1,
"phone": " +38552815 670",
"fax": "+38552814 161",
"vatcode": "37037737955",
"web": "www.waypoint-int.com",
"email": "sales@waypoint-int.com",
"pac": false

```
    },
    {
        "id": 828269,
        "name": "Sailazores Yacht Charter",
        "address": "Rua Maestro Francisco Lacerda, 13
9800-551 Velas, São Jorge, Azores",
        "city": "Velas, São Jorge, Azores",
        "zip": "9800-551",
        "countryld": 100121,
        "phone": "+351 92 4128888 | +351 91 6231111 | +351 91 1065555",
        "vatcode": "PT509 557 481",
        "web": "www.sailazores.pt",
        "email": "info@sailazores.pt",
        "pac": false
    }
    }
}
```

# All countries 

| Params | Values |
| :-- | :-- |
| Description: | Provides all available countries |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/catalogue/v6/cou <br> ntries |
| Request method: | POST |
| Request structure: | RestAuthentication |
| Response structure: | RestCountryList |

## Example

URL:https://ws.nausys.com/CBMS-external/rest/catalogue/v6/countries

## POST param:

```
{
    "username":"XXXXXX@XXX",
    "password":"XXXXXXXXXXX"
}
```

Response:

```
{
    "status": "OK",
    "countries": {
        {
            "id": 100184,
            "code": "AFG",
            "name": {
                "textDE": "Afghanistan",
                "textEN": "Afghanistan",
                "textHR": "Afghanistan",
                "textIT": "Afghanistan",
                "textSI": "Afghanistan"
            }
    },
    {
        "id": 100125,
        "code": "ALB",
        "name": {
```

```
            "textDE": "Albanien",
            "textEN": "Albania ",
            "textHR": "Albanija",
            "textIT": "Albania ",
            "textSI": "Albanija"
        }
    },
    {
        "id": 100111,
        "code": "DZA",
        "name": {
            "textDE": "Algerien ",
            "textEN": "Algeria ",
            "textHR": "Alžir",
            "textIT": "Algeria",
            "textSI": "Alžir"
        }
    }
}
```

# All country states 

| Params | Values |
| :-- | :-- |
| Description: | Provides all available countries |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/catalogue/v6/cou <br> ntries |
| Request method: | POST |
| Request structure: | RestAuthentication |
| Response structure: | RestCountryStateList |

## Example

URL:https://ws.nausys.com/CBMS-external/rest/catalogue/v6/countrystates

## POST param:

```
{
    "username":"XXXXXX@XXX",
    "password":"XXXXXXXXXXX"
}
```

Response:
\{
"status": "OK",
"countries": [
\{
"countryId": 100105,
"id": 10268318,
"name": "Indiana"
\},
\{

"countryId": 100105,
"id": 10268315,
"name": "lowa"
\}
]
\}

# All discount items 

| Params | Values |
| :-- | :-- |
| Description: | Provides all available discount items |
| Consumes: | JSON (application/json) |
| Produces: | JSON (application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/catalogue/v6/disc <br> ountltems |
| Request method: | POST |
| Request structure: | RestAuthentication |
| Response structure: | RestDiscountltemList |

## Example

URL:https://ws.nausys.com/CBMS-external/rest/catalogue/v6/discountltems

## POST param:

```
{
    "username":"XXXXXX8XXX",
    "password":"XXXXXXXXXXX"
}
```

Response:

```
{"status": "OK",
    "discounts": [
        {"id": 579232,
            "name": {"textDE": "1 Wochen",
            "textEN": "1 week",
            "textHR": "1 tjedan",
            "textIT": "1 settimana",
            "textSI": "1 tjedan"
        }
    },
    {
        "id": 846076,
        "name": {
            "textDE": "10-jähriges Jubiläum",
            "textEN": "10 year anniversary",
            "textHR": "Popust za 10. godišnjicu",
            "textIT": "10 ' anniversario",
            "textSI": "10. obletnica"
        }
    },
    {
        "id": 107516,
        "name": {
            "textDE": "11 Tage Charter",
```

<!-- Pages 21 - 30 -->

```
                    "textEN": "11 days charter",
                    "textHR": "11 dana najma",
                    "textIT": "11 giorni charter",
                    "textSI": "11 dana najma"
        }
    }
}
```

# All engine builders 

| Params | Values |
| :-- | :-- |
| Description: | Provides all available yacht engine builders |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/catalogue/v6/eng <br> ineBuilders |
| Request method: | POST |
| Request structure: | RestAuthentication |
| Response structure: | RestEngineBuilderList |

## Example

URL:https://ws.nausys.com/CBMS-external/rest/catalogue/v6/engineBuilders

## POST param:

```
{
    "username":"XXXXXX@XXX",
    "password":"XXXXXXXXXXX"
}
```

Response:
\{
"status": "OK",
"builders": [
\{
"id": 5203486,
"name": "BMW Marine"
\},
\{
"id": 830197,
"name": "Caterpilar Diesel"
\},
\{
"id": 825608,
"name": "Cummins"
\},
\{

"id": 996302,
"name": "Detroit Diesel"
},
\{
"id": 1003022,
"name": "Doosan"
\},
\{
"id": 1235871,
"name": "Evinrude"
\},
\{
"id": 1241860,
"name": "Fap Famos"
\},
\{
"id": 1156960,
"name": "Fiat"
\},
\{
"id": 1063385,
"name": "Ford Lehmann"
\},
\{
"id": 120885,
"name": "Honda"
\},
\{
"id": 933521,
"name": "Hyundai"
\},
\{
"id": 828329,
"name": "Isuzu"
\},
\{
"id": 1157972,
"name": "Iveco"
\},
\{
"id": 10091700,

```
    "name": "John Deere"
},
{
    "id": 1222350,
    "name": "Leland"
},
{
    "id": 1179380,
    "name": "Lombardini"
},
{
    "id": 120888,
    "name": "MAN"
},
{
    "id": 120886,
    "name": "Mercedes Benz"
},
{
    "id": 120883,
    "name": "Mercruiser"
},
{
    "id": 579241,
    "name": "Mercury Verado"
},
{
    "id": 974489,
    "name": "MTU"
},
{
    "id": 1167932,
    "name": "Nanni"
},
{
    "id": 120887,
    "name": "Perkins"
},
{
    "id": 930196,
```

"name": "Sail Drive"
},
{
"id": 922669,
"name": "Scania"
},
{
"id": 616686,
"name": "Steyr"
},
{
"id": 616677,
"name": "Suzuki"
},
{
"id": 1075942,
"name": "Tohatsu"
},
{
"id": 1174132,
"name": "Vetus"
},
{
"id": 1331945,
"name": "VM Motori"
},
{
"id": 837248,
"name": "Volkswagen"
},
{
"id": 120801,
"name": "Volvo"
},
{
"id": 120882,
"name": "Yamaha"
},
{
"id": 120884,
"name": "Yanmar"
... NauSYS - The fastest growing Booking System in the World ...

```
    }
    ]
}
```

# All equipment 

| Params | Values |
| :-- | :-- |
| Description: | Provides all available equipment |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/catalogue/v6/equ <br> ipment |
| Request method: | POST |
| Request structure: | RestAuthentication |
| Response structure: | RestEquipmentList |

## Example

URL:http://ws.nausys.com/CBMS-external/rest/catalogue/v6/equipment

## POST param:

```
{
    "username":"XXXXXX@XXX",
    "password":"XXXXXXXXXXX"
}
```

Response:

```
{
    "status": "OK",
    "equipment": [
        {
            "id": 113406,
            "categoryId": 599275,
            "name": {
            "textDE": "220v Stecker",
            "textEN": "220 volt socket",
            "textHR": "Utičnica 220v",
            "textIT": "220v spina",
            "textSI": "Utičnica 220v"
        }
    },
    {
        "id": 922685,
        "categoryId": 599276,
        "name": {
            "textDE": "2 Kabinen in der Hülle - erreichbar innen und außen",
            "textEN": "2 cabins in the hull - reachable inside and outside",
            "textHR": "2 kabine u trupu - dostupne izvana i iznutra",
            "textIT": "2 cabine nello scafo - raggiungibile all'interno e all'esterno",
            "textSI": "2 kabine v trupu - dosegljiva znotraj in zunaj"
        }
    }
}
```

## All equipment categories

| Params | Values |
| :-- | :-- |
| Description: | Provides all available equipment categories |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/catalogue/v6/equ <br> ipmentCategories |
| Request method: | POST |
| Request structure: | RestAuthentication |
| Response structure: | RestEquipmentCategoryList |

# Example 

URL:https://ws.nausys.com/CBMS-external/rest/catalogue/v6/equipmentCategories

## POST param:

```
{
    "username":"XXXXXX@XXX",
    "password":"XXXXXXXXXXX"
}
```

Response:

```
{
    "status": "OK",
    "equipmentCategories": [
        {
            "id": 599271,
            "name": {
                "textDE": "Segel",
                "textEN": "Sails",
                "textHR": "Jedrilje",
                "textIT": "Vele",
                "textSI": "Jedrilje"
            }
        },
        {
            "id": 599268,
            "name": {
                "textDE": "Navigation",
                "textEN": "Navigation",
                "textHR": "Navigacija",
                "textIT": "Navigazione",
                "textSI": "Navigacija"
            }
        },
        {
            "id": 599272,
            "name": {
                "textDE": "Sicherheitsausrüstung",
                "textEN": "Safety",
                "textHR": "Sigurnost",
                "textIT": "Sicurezza",
                "textSI": "Sigurnost"
            }
        }
    ]
}
```

## All locations

| Params | Values |
| :-- | :-- |
| Description: | Provides all available locations |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/catalogue/v6/locat
tions |
| Request method: | POST |
| Request structure: | RestAuthentication |
| Response structure: | RestLocationList |

# Example 

URL:https://ws.nausys.com/CBMS-external/rest/catalogue/v6/locations

## POST param:

```
{
    "username":"XXXXXX@XXX",
    "password":"XXXXXXXXXXX"
}
```

Response:

```
{"status": "OK",
    "locations": [
        {"id": 482449,
            "name": {"textDE": "Abacos",
                "textEN": "Abacos",
                "textHR": "Abacos",
                "textIT": "Abacos",
                "textSI": "Abacos"
            },
            "lon": -77.143680,
            "lat": 26.359880,
            "regionId": 555307
        },
        {
            "id": 68,
            "name": {
                "textDE": "ACI Marina Cres",
                "textEN": "ACI Marina Cres",
                "textHR": "ACI Marina Cres",
                "textIT": "ACI Marina Cres",
                "textSI": "ACI Marina Cres"
            },
            "lon": 14.414060,
            "lat": 44.944880,
            "regionId": 557576
        }
    ]
}
```

## All Packages

| Params | Values |
| :-- | :-- |
| Description: | Provides all available cabin packages from requested charter <br> company |
| Consumes: | JSON (content type: application/json) |

|  Produces: | JSON (content type: application/json)  |
| --- | --- |
|  URL: | https://ws.nausys.com/CBMS-external/rest/catalogue/v6/cabi nPackage/[charterCompanyId]  |
|  Request method: | POST  |
|  Request structure: | RestAuthentication  |
|  Response structure: | RestCabinPackageList  |

# Example

URL:https://ws.nausys.com/CBMS-external/rest/catalogue/v6/cabinPackage/102701 POST param:

```
{
    "username":"XXXXXX@XXX",
    "password":"XXXXXXXXXXX"
}
```

Response:

```
{
    "status": "OK",
    "cabinPackages": [
    {
        "packageld": 10309007,
        "packageName": "CabinPackage1",
        "cabinPackageDescription": {
            "baseFromId": 102753,
            "baseTold": 102753,
            "duration": 7,
            "itinerary": {
            "description": {
            "textDE": "Main description german",
            "textEN": "Main description english",
            "textFR": "Main description french",
            "textHR": "Main description croatian"
        },
        "departure": {
            "textDE": "Departure base date german",
            "textEN": "Departure base date english",
            "textFR": "Departure base date french",
            "textHR": "Departure base date croatian"
        },
        "arrival": {
            "textDE": "Arrival base date german",
            "textEN": "Arrival base date english",
            "textFR": "Arrival base date french",
            "textHR": "Arrival base date croatian"
        },
        "availableOnBoard": {
            "textDE": "Available on board german",
            "textEN": "Available on board english",
            "textFR": "Available on board french",
            "textHR": "Available on board croatian"
        },
        "important": {
            "textDE": "Important german",
            "textEN": "Important english",
            "textFR": "Important french",
            "textHR": "Important croatian"
        },
        "meetingPoint": {
            "textDE": "Meeting point german",
            "textEN": "Meeting point english",
            "textFR": "Meeting point french",
            "textHR": "Meeting point croatian"
```

```
    ],
    "ratesInclude": {
    "textDE": "The rates include german",
    "textEN": "The rates include english",
    "textFR": "The rates include french",
    "textHR": "The rates include croatian"
    },
    "ratesDoNotInclude": {
    "textDE": "The rates do not include german",
    "textEN": "The rates do not include english",
    "textFR": "The rates do not include french",
    "textHR": "The rates do not include croatian"
    },
    "days": [
        {
            "day": {
            "textDE": "day one german",
            "textEN": "day one english",
            "textFR": "day one french",
            "textHR": "day one croatian"
        },
        "description": {
            "textDE": "day one details german",
            "textEN": "day one details english",
            "textFR": "day one details french",
            "textHR": "day one details croatian"
        }
        },
        {
            "day": {
            "textDE": "day two german",
            "textEN": "day two english",
            "textFR": "day two french",
            "textHR": "day two croatian"
        },
        "description": {
            "textDE": "day two details german",
            "textEN": "day two details english",
            "textFR": "day two details french",
            "textHR": "day two details croatian"
        }
        }
    }
}
],
"seasonCabinCharterSpecificData": [
    {
        "seasonId": 7755128,
        "cabinPriceLists": [
        {
            "columns": [
            {
                "periods": [
                    {
                        "periodFrom": "01.01.2019",
                        "periodTo": "31.03.2019"
                    ],
                    {
                        "periodFrom": "01.04.2019",
                        "periodTo": "30.06.2019"
                    }
                    ]
                    },
                    {
                        "periods": [
                    {
                        "periodFrom": "01.10.2019",
                        "periodTo": "31.12.2019"
                    }
                    ]
                    },
                    {
```

```
        "periods": [
            {
                "periodFrom": "01.07.2019",
                "periodTo": "30.09.2019"
            }
        ]
    ],
    "rows": [
        {
            "cabinDefinitionld": 10279571,
            "prices": [
            {
                "price1": "180.00000",
                "price2": "120.00000"
            },
            {
                "price1": "185.00000",
                "price2": "125.00000"
            },
            {
                "price1": "200.00000",
                "price2": "150.00000"
            }
        ]
    ],
    {
        "cabinDefinitionld": 10279572,
        "prices": [
            {
                "price1": "400.00000",
                "price2": "320.00000",
                "price3": "250.00000"
            },
            {
                "price1": "410.00000",
                "price2": "330.00000",
                "price3": "280.00000"
            },
            {
                "price1": "450.00000",
                "price2": "350.00000",
                "price3": "300.00000"
            }
        ]
    ],
    {
        "cabinDefinitionld": 10174571,
        "prices": [
            {
                "price1": "200.00000",
                "price2": "150.00000"
            },
            {
                "price1": "220.00000",
                "price2": "180.00000"
            },
            {
                "price1": "280.00000",
                "price2": "200.00000"
            }
        ]
    }
    ],
    "currency": "EUR"
    }
],
    "additionalYachtEquipment": [
        {
            "id": 10309301,
            "price": "500.00",
            "currency": "EUR",
```

<!-- Pages 31 - 40 -->

```
    "equipmentId": 113410,
    "priceMeasureId": 54,
    "calculationType": "SEPARATE_PAYMENT",
    "condition": [],
    "amount": "500.00"
    }
    },
    "services": [
    {
        "id": 10309151,
        "serviceId": 119353,
        "price": "0.00",
        "currency": "EUR",
        "priceMeasureId": 54,
        "calculationType": "SEPARATE_PAYMENT",
        "description": [],
        "obligatory": false,
        "amount": "0.00"
    }
    }
},
{
    "seasonId": 3579675,
    "cabinPriceLists": [
    {
        "columns": [
        {
            "periods": [
            {
                "periodFrom": "01.10.2018",
                "periodTo": "31.12.2018"
            }
        ]
    },
    {
        "periods": [
        {
            "periodFrom": "01.04.2018",
            "periodTo": "30.06.2018"
        },
        {
            "periodFrom": "01.01.2018",
            "periodTo": "31.03.2018"
        }
        ]
    },
    {
        "periods": [
            {
                "periodFrom": "01.07.2018",
                "periodTo": "30.09.2018"
            }
        ]
    }
    ],
    "rows": [
    {
        "cabinDefinitionId": 10279571,
        "prices": [
        {
            "price1": "185.00000",
            "price2": "125.00000"
        },
        {
            "price1": "180.00000",
            "price2": "120.00000"
        },
        {
            "price1": "200.00000",
            "price2": "150.00000"
        }
    ]
```

```
    },
    {
    "cabinDefinitionld": 10279572,
    "prices": [
        {
            "price1": "410.00000",
            "price2": "330.00000",
            "price3": "280.00000"
        },
        {
            "price1": "400.00000",
            "price2": "320.00000",
            "price3": "250.00000"
        },
        {
            "price1": "450.00000",
            "price2": "350.00000",
            "price3": "300.00000"
        }
    ]
    },
    {
    "cabinDefinitionld": 10174571,
    "prices": [
        {
            "price1": "220.00000",
            "price2": "180.00000"
        },
        {
            "price1": "200.00000",
            "price2": "150.00000"
        },
        {
            "price1": "280.00000",
            "price2": "200.00000"
        }
    ]
    }
    ],
    "currency": "EUR"
    }
    ]
    1
    {
    "seasonld": 1519328,
    "cabinPriceLists": [
        {
            "columns": [
            {
            "periods": [
            {
                "periodFrom": "01.01.2017",
                "periodTo": "31.12.2017"
            }
        ]
        ]
    ],
    "rows": [
        {
            "cabinDefinitionld": 10279571,
            "prices": [
            {
                "price1": "185.00000",
                "price2": "125.00000"
            }
        ]
    ],
    {
        "cabinDefinitionld": 10279572,
        "prices": [
        {
            "price1": "410.00000",
```

```
            "price2": "330.00000",
            "price3": "250.00000"
        }
        }
        },
        {
            "cabinDefinitionId": 10174571,
            "prices": [
            {
                "price1": "220.00000",
                "price2": "180.00000"
            }
        }
        }
        ],
        "currency": "EUR"
        }
    ]
    }
    ],
"allocations": [
    {
        "subPackages": [
            10279603,
            10279604
    ],
    "yachts": [
        {
            "id": 479292,
            "name": "Whispper",
            "companyId": 102701,
            "baseId": 102753,
            "locationId": 51,
            "yachtModelld": 263,
            "draft": 1.8,
            "cabins": 2,
            "cabinsCrew": 0,
            "berthsCabin": 4,
            "berthsSalon": 0,
            "berthsCrew": 2,
            "berthsTotal": 6,
            "wc": 1,
            "wcCrew": 0,
            "buildYear": 2004,
            "stearingTypeld": 2,
            "steeringTypeld": 2,
            "sailTypeld": 1,
            "genoaTypeld": 1,
            "standardYachtEquipment": [
            {
                "id": 54325,
                "quantity": 1,
                "equipmentId": 24,
                "comment": {},
                "highlight": false
    },
    {
        "id": 54329,
        "quantity": 1,
        "equipmentId": 18,
        "comment": [],
        "highlight": false
    },
    {
        "id": 54320,
        "quantity": 1,
        "equipmentId": 7,
        "comment": [],
        "highlight": false
    },
    {
        "id": 54328,
```

```
"quantity": 1,
"equipmentId": 100820,
"comment": {},
"highlight": false
},
{
"id": 54323,
"quantity": 1,
"equipmentId": 13,
"comment": {},
"highlight": false
},
{
"id": 54319,
"quantity": 1,
"equipmentId": 15,
"comment": {},
"highlight": false
},
{
"id": 54322,
"quantity": 1,
"equipmentId": 100499,
"comment": {},
"highlight": false
},
{
"id": 54330,
"quantity": 1,
"equipmentId": 100619,
"comment": {},
"highlight": false
},
{
"id": 54324,
"quantity": 1,
"equipmentId": 6,
"comment": {},
"highlight": false
},
{
"id": 54327,
"quantity": 1,
"equipmentId": 116653,
"comment": {},
"highlight": false
},
{
"id": 54326,
"quantity": 1,
"equipmentId": 100491,
"comment": {},
"highlight": false
},
{
"id": 54318,
"quantity": 1,
"equipmentId": 17,
"comment": {},
"highlight": false
},
{
"id": 54321,
"quantity": 1,
"equipmentId": 100498,
"comment": {},
"highlight": false
}
],
"fourStarCharter": false,
"mainPictureUrl": "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/main.jpg",
"picturesURL": [

```
    "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/main.jpg",
    "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/layout.jpg",
    "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/slika (3).jpg",
    "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/slika (4).jpg",
    "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/slika (5).jpg"
    },
    "pictures": [
        {
            "src": "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/main.jpg",
            "catalogPhoto": true,
            "mainPicture": true,
            "layoutPicture": false
        },
        {
            "src": "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/layout.jpg",
            "catalogPhoto": true,
            "mainPicture": false,
            "layoutPicture": true
        },
        {
            "src": "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/slika (3).jpg",
            "catalogPhoto": true,
            "mainPicture": false,
            "layoutPicture": false
        },
        {
            "src": "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/slika (4).jpg",
            "catalogPhoto": true,
            "mainPicture": false,
            "layoutPicture": false
        },
        {
            "src": "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/slika (5).jpg",
            "catalogPhoto": true,
            "mainPicture": false,
            "layoutPicture": false
        }
    },
    "fuelTank": 0,
    "waterTank": 0,
    "mastLength": 21.5,
    "yachtCabin": [
        {
            "cabinDefinitionId": 10279571,
            "quantity": 2
        },
        {
            "cabinDefinitionId": 10174571,
            "quantity": 1
        }
    }
    }
    }
    }
}
p
```

"packageId": 10309007,
"packageName": "CabinPackage2",
"cabinPackageDescription": [
"baseFromId": 102546,
"baseTold": 105646,
"duration": 4
],
"seasonCabinCharterSpecificData": [
"seasonId": 7755128,
"cabinPriceLists": [
"columns": [
"periods": [

```
        {
            "periodFrom": "01.01.2019",
            "periodTo": "31.12.2019"
        }
        }
        }
    },
    "rows": [
        {
            "cabinDefinitionId": 10279571,
            "prices": [
            {
                "price1": "150.00000",
                "price2": "100.00000"
            }
        }
        },
        {
            "cabinDefinitionId": 10279572,
            "prices": [
            {
                "price1": "300.00000",
                "price2": "250.00000",
                "price3": "200.00000"
            }
        ]
        },
        {
            "cabinDefinitionId": 10174571,
            "prices": [
            {
                "price1": "200.00000",
                "price2": "150.00000"
            }
        ]
        }
    },
    "currency": "EUR"
    }
    ],
    "additionalYachtEquipment": [
        {
            "id": 10309301,
            "price": "500.00",
            "currency": "EUR",
            "equipmentId": 113410,
            "priceMeasureId": 54,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": {},
            "amount": "500.00"
        }
    ],
    "services": [
        {
            "id": 10309151,
            "serviceId": 119353,
            "price": "0.00",
            "currency": "EUR",
            "priceMeasureId": 54,
            "calculationType": "SEPARATE_PAYMENT",
            "description": {},
            "obligatory": false,
            "amount": "0.00"
        }
        }
    }
    ]
}
```

All price lists

|  Params | Values  |
| --- | --- |
|  Description: | Provides all available price lists  |
|  Consumes: | JSON (content type: application/json)  |
|  Produces: | JSON (content type: application/json)  |
|  URL: | https://ws.nausys.com/CBMS-external/rest/catalogue/v6/pric eLists  |
|  Request method: | POST  |
|  Request structure: | RestAuthentication  |
|  Response structure: | RestPriceListList  |

# Example

URL:https://ws.nausys.com/CBMS-external/rest/catalogue/v6/priceLists POST param:

```
{
    "username":"XXXXXX8XXX",
    "password":"XXXXXXXXXXX"
}
```

Response:

```
{
    "status": "OK",
    "priceLists": [
        {
            "id": 859189,
            "type": "WEEKLY",
            "columns": [
            {
            "periods": [
            {
                "periodFrom": "01.01.2010",
                "periodTo": "16.04.2010"
            },
            {
                "periodFrom": "02.10.2010",
                "periodTo": "31.12.2010"
            }
        ]
        },
        {
        "periods": [
```

```
        {
            "periodFrom": "18.09.2010",
            "periodTo": "01.10.2010"
        },
        {
            "periodFrom": "17.04.2010",
            "periodTo": "14.05.2010"
        }
    ]
},
{
    "periods": [
        {
            "periodFrom": "15.05.2010",
            "periodTo": "18.06.2010"
        },
        {
            "periodFrom": "04.09.2010",
            "periodTo": "17.09.2010"
        }
    ]
},
{
    "periods": [
        {
            "periodFrom": "19.06.2010",
            "periodTo": "30.07.2010"
        },
        {
            "periodFrom": "21.08.2010",
            "periodTo": "03.09.2010"
        }
    ]
},
{
    "periods": [
        {
            "periodFrom": "31.07.2010",
            "periodTo": "20.08.2010"
        }
```

```
        ]
        }
    ],
    "rows": [
        {
            "yachtId": 479293,
            "prices": [
            "1350",
            "1500",
            "2000",
            "2300",
            "2700"
        ]
        },
        {
            "yachtId": 103459,
            "prices": [
            "2000",
            "2150",
            "2600",
            "2800",
            "3200"
        ]
        }
    ],
    "seasonId": 859188,
    "currency": "EUR"
},
{
    "id": 102783,
    "type": "WEEKLY",
    "columns": [
        {
            "periods": [
            {
                "periodFrom": "24.09.2011",
                "periodTo": "31.12.2011"
            },
            {
                "periodFrom": "01.01.2011",
```

```
            "periodTo": "08.04.2011"
        }
    ]
    },
    {
        "periods": [
        {
            "periodFrom": "09.04.2011",
            "periodTo": "06.05.2011"
        },
        {
            "periodFrom": "10.09.2011",
            "periodTo": "23.09.2011"
        }
    ]
    },
    {
        "periods": [
        {
            "periodFrom": "20.08.2011",
            "periodTo": "09.09.2011"
        },
        {
            "periodFrom": "07.05.2011",
            "periodTo": "24.06.2011"
        }
    ]
    },
    {
        "periods": [
        {
            "periodFrom": "25.06.2011",
            "periodTo": "19.08.2011"
        }
    ]
    }
],
"rows": [
    {
        "yachtId": 103461,
```

<!-- Pages 41 - 50 -->

```
        "prices": [
            "2600",
            "2900",
            "3400",
            "3900"
        ]
},
{
    "yachtId": 102760,
    "prices": [
        "1200",
        "1350",
        "1500",
        "1700"
    ]
},
{
    "yachtId": 102801,
    "prices": [
        "1495",
        "1900",
        "2005",
        "2300"
    ]
},
{
    "yachtId": 102804,
    "prices": [
        "2650",
        "2890",
        "3250",
        "4000"
    ]
},
{
    "yachtId": 103458,
    "prices": [
        "2700",
        "3000",
        "3300",
```

```
        "4100"
        ]
},
{
    "yachtId": 102803,
    "prices": [
        "1200",
        "1300",
        "1450",
        "1750"
    ]
},
{
    "yachtId": 103451,
    "prices": [
        "1600",
        "2200",
        "2400",
        "2800"
    ]
},
{
    "yachtId": 103456,
    "prices": [
        "1800",
        "2000",
        "2100",
        "2600"
    ]
},
{
    "yachtId": 102805,
    "prices": [
        "900",
        "1010",
        "1250",
        "1340"
    ]
},
{
```

```
        "yachtId": 103454,
        "prices": [
            "2000",
            "2300",
            "2800",
            "3000"
        ]
        },
        {
            "yachtId": 102802,
            "prices": [
                "2500",
                "2700",
                "3100",
                "3500"
            ]
        }
        ],
        "seasonId": 102765,
        "currency": "EUR",
        "locationsId": [
            68,
            51
        ]
    }
    ]
}
```

# All price measures 

| Params | Values |
| :-- | :-- |
| Description: | Provides all available price measures |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/catalogue/v6/pric <br> eMeasures |
| Request method: | POST |
| Request structure: | RestAuthentication |
| Response structure: | RestPriceMeasureList |

# Example 

URL:https://ws.nausys.com/CBMS-external/rest/catalogue/v6/priceMeasures

## POST param:

```
{
    "username":"XXXXXX@XXX",
    "password":"XXXXXXXXXXX"
}
```

## Response:

```
{
    "status": "OK",
    "priceMeasures": [
        {
            "id": 101767,
            "name": ["textDE": "one-way",
                "textEN": "one-way",
                "textHR": "u jednom smjeru",
                "textIT": "un modo",
                "textSI": "v eno smer"
            }
        },
        {
            "id": 126869,
            "name": {
                "textDE": "one-way / pro Person",
                "textEN": "one-way / person",
                "textHR": "one-way / po osobi",
                "textIT": "one-way / a persona",
                "textSI": "v eno smer / po osobi"
            }
        },
        {
            "id": 485612,
            "name": {
                "textDE": "pro 2 Wochen",
                "textEN": "per 2 weeks",
                "textHR": "2 tjedna",
                "textIT": "da 2 settimane",
                "textSI": "2 tjedna"
            }
        }
    ]
}
```

## All regions

| Params | Values |
| :-- | :-- |
| Description: | Provides all available regions |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/catalogue/v6/regi <br> ons |
| Request method: | POST |
| Request structure: | RestAuthentication |
| Response structure: | RestRegionList |

## Example

URL:https://ws.nausys.com/CBMS-external/rest/catalogue/v6/regions

# POST param: 

```
{
    "username":"XXXXXX@XXX",
    "password":"XXXXXXXXXXX"
}
```

Response:

```
{
    "status": "OK",
    "regions": [
        {
            "id": 555307,
            "name": {
                "textDE": "Abaco Islands",
                "textEN": "Abaco Islands",
                "textHR": "Abaco Islands",
                "textIT": "Abaco Islands",
                "textSI": "Abaco Islands"
            },
            "countryId": 491658
        },
        {
            "id": 842269,
            "name": {
                "textDE": "Abruzzo",
                "textEN": "Abruzzo",
                "textHR": "Abruzzo",
                "textIT": "Abruzzo",
                "textSI": "Abruzzo"
            },
            "countryId": 100147
        },
        {
            "id": 602966,
            "name": {
                "textDE": "Aegean Islands",
                "textEN": "Aegean Islands",
                "textHR": "Aegean Islands",
                "textIT": "Aegean Islands",
                "textSI": "Aegean Islands"
            },
            "countryId": 100116
        }
    ]
}
```

## All sail types

| Params | Values |
| :-- | :-- |
| Description: | Provides all available sail types |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/catalogue/v6/sail <br> Types |
| Request method: | POST |
| Request structure: | RestAuthentication |

# Example 

URL:https://ws.nausys.com/CBMS-external/rest/catalogue/v6/sailTypes

## POST param:

```
{
    "username":"XXXXXX@XXX",
    "password":"XXXXXXXXXXX"
}
```

## Response:

```
{
    "status": "OK",
    "sailTypes": [
        {"id": 4,
            "name": ["textDE": "classic/standard",
                "textEN": "classic/standard",
                "textHR": "classic/standard",
                "textIT": "classic/standard",
                "textSI": "classic/standard"
            }
        },
        {
            "id": 3,
            "name": {
                "textDE": "Lattengroß",
                "textEN": "full batten",
                "textHR": "full batten",
                "textIT": "steccata",
                "textSI": "full batten"
            }
        },
        {
            "id": 1,
            "name": {
                "textDE": "Roll",
                "textEN": "furling/roll",
                "textHR": "furling/roll (samonavijajue)",
                "textIT": "avvolgi",
                "textSI": "furling/roll (samonavijajue)"
            }
        }
]
```

## All seasons

| Params | Values |
| :-- | :-- |
| Description: | Provides all available seasons |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/catalogue/v6/sea <br> sons |
| Request method: | POST |
| Request structure: | RestAuthentication |
| Response structure: | RestSeasonList |

# Example 

URL:https://ws.nausys.com/CBMS-external/rest/catalogue/v6/seasons

## POST param:

```
{
    "username":"XXXXXX@XXX",
    "password":"XXXXXXXXXXX"
}
```

## Response:

```
{
    "status": "OK",
    "seasons": [
        {
            "id": 570164,
            "charterCompanyId": 110525,
            "season": "2015",
            "from": "01.01.2015",
            "to": "31.12.2015",
            "defaultSeason": true
        },
        {
            "id": 511306,
            "charterCompanyId": 100553,
            "season": "2014",
            "from": "01.01.2014",
            "to": "31.12.2014",
            "defaultSeason": false
        },
        {
            "id": 621905,
            "charterCompanyId": 100553,
            "season": "2015",
            "from": "01.01.2015",
            "to": "31.12.2015",
            "defaultSeason": true,
            "locationsId": [
                51,
                5168287,
                53
            ]
```

```
    }
    }
}
```

# All services 

| Params | Values |
| :-- | :-- |
| Description: | Provides all available services |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/catalogue/v6/serv <br> ices |
| Request method: | POST |
| Request structure: | RestAuthentication |
| Response structure: | RestServiceList |

## Example

URL:https://ws.nausys.com/CBMS-external/rest/catalogue/v6/services
POST param:
\{
"username":"XXXXXX@XXX",
"password":"XXXXXXXXXXX"
\}

Response:

```
{
    "status": "OK",
    "services": [
        {
            "id": 119044,
            "name": {
                "textDE": "100% der Treibstoffkosten",
                "textEN": "100% fuel used",
                "textHR": "100% potroßenog goriva",
                "textIT": "100% di carburante consumato",
                "textSI": "100% potroßenog goriva"
            }
        },
        {
            "id": 468000,
            "name": {
                "textDE": "100% Nachlass bei Tankfüllung in der Marina Kastela ",
                "textEN": "100% of fuel consumed only in Marina Kastela",
                "textHR": "100% potroßenog goriva - samo u marini Kaštela",
                "textIT": "100% di sconto sul serbatoio pieno in Marina Kastela",
                "textSI": "100% potroßenog goriva - samo u marini Kaštela"
            }
        },
        {
            "id": 119353,
            "name": {
                "textDE": "24 Stunden Hotline",
                "textEN": "24 hour hotline",
                "textHR": "24 sata hotline",
                "textIT": "24 ore hotline",
                "textSI": "24 sata hotline"
            }
        }
    ]
}
```

# All steering types 

| Params | Values |
| :-- | :-- |
| Description: | Provides all available steering types |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/catalogue/v6/stee <br> ringTypes |
| Request method: | POST |
| Request structure: | RestAuthentication |
| Response structure: | RestSteeringTypeList |

## Example

URL: https://ws.nausys.com/CBMS-external/rest/catalogue/v6/steeringTypes
POST param:
\{
"username":"XXXXXX8XXX",
"password":"XXXXXXXXXXX"
\}

# Response: 

```
{
    "status": "OK",
    "steeringTypes": [
        {
            "id": 1,
            "name": {
                "textDE": "2 Steuerräder",
                "textEN": "2 Steering Wheels",
                "textHR": "2 kormilarska kola (timuna)",
                "textIT": "Doppia timoneria",
                "textSI": "2 kormilarska kola (timuna)"
            }
        },
        {
            "id": 103108,
            "name": {
                "textDE": "Joystick ",
                "textEN": "Joystick ",
                "textHR": "Joystick ",
                "textIT": "Joystick ",
                "textSI": "Joystick "
            }
        },
        {
            "id": 2,
            "name": {
                "textDE": "Radsteuerung",
                "textEN": "Steering Wheel ",
                "textHR": "Kormilarsko kolo (Timun)",
                "textIT": "Timone",
                "textSI": "Kormilarsko kolo (Timun)"
            }
        }
    ]
}
```

## All users

## Definition

| Params | Values |
| :-- | :-- |
| Description | Provides list of all active users for a charter company |
| Consumes | JSON (content type: application/json) |
| Produces | JSON (content type: application/json) |
| URL | http://ws-test.nausys.com/CBMS-external/rest/catalogue/v6/ <br> users |
| Request method | POST |
| Request structure | RestAuthentication |
| Response structure | RestUserList |

## All yacht builders

| Params | Values |
| :-- | :-- |
| Description: | Provides all available yacht builders |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |

<!-- Pages 51 - 60 -->

| URL: | https://ws.nausys.com/CBMS-external/rest/catalogue/v6/yac <br> htBuilders |
| :-- | :-- |
| Request method: | POST |
| Request structure: | RestAuthentication |
| Response structure: | RestYachtBuilderList |

# Example 

URL:https://ws.nausys.com/CBMS-external/rest/catalogue/v6/yachtBuilders

## POST param:

```
{
    "username":"XXXXXX@XXX",
    "password":"XXXXXXXXXXX"
}
```

## Response:

```
{
    "status": "OK",
    "builders": [
        {
            "id": 203,
            "name": "3000 Marine (Mondial Yachts)"
        },
        {
            "id": 522081,
            "name": "3C Composites"
        },
        {
            "id": 836999,
            "name": "Abacus Marine"
        }
    ]
}
```

## All yacht categories

| Params | Values |
| :-- | :-- |
| Description: | Provides all available yacht categories |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/catalogue/v6/yac <br> htCategories |
| Request method: | POST |
| Request structure: | RestAuthentication |
| Response structure: | RestYachtCategoryList |

## Example

URL:https://ws.nausys.com/CBMS-external/rest/catalogue/v6/yachtCategories

## POST param:

```
{
    "username":"XXXXXX@XXX",
    "password":"XXXXXXXXXXX"
}
```

Response:

```
{
    "status": "OK",
"categories": [
        {"id": 51,
            "name": {
                "textDE": "Katamaran",
                "textEN": "Catamaran",
                "textHR": "Katamaran",
                "textIT": "Catamaran",
                "textSI": "Katamaran"
            }
        },
        {
            "id": 565915,
            "name": {
                "textDE": "Fisherman",
                "textEN": "Fisherman",
                "textHR": "Fisherman",
                "textIT": "Fisherman",
                "textSI": "Fisherman"
            }
        },
        {
            "id": 102,
            "name": [
                "textDE": "Gulet",
                "textEN": "Gulet",
                "textHR": "Gulet",
                "textIT": "Golett",
                "textSI": "Gulet"
            }
        }
    ]
}
```

# All yachts 

| Params | Values |
| :-- | :-- |
| Description: | Provides all available yachts from requested charter company |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/catalogue/v6/yac <br> hts/[charterCompanyId] |
| Request method: | POST |
| Request structure: | AllYachtsRequest |
| Response structure: | RestYachtList |

Note:

Using the yacht pictures endpoint retrieves images at their original size, but it is possible to select an image size by using additional " $h$ " and/or " $w$ " parameters.
e.g. https://ws.nausys.com/CBMS-external/rest/yacht/10315 2/pictures/main.jpg?w=600

Only responses for agency request will have fields maxDiscountFromCommission and agencyDiscountType ("Client price" \& "Agency commission")

# Example 

URL: https://ws.nausys.com/CBMS-external/rest/catalogue/v6/yachts/102701

## POST param:

```
{
"username":"XXXXXX@XXX",
    "password":"XXXXXXXXXXX"
"yachtIDs":[103152,103151]
}
```

Response:

```
{
    "status": "OK",
    "yachtIDs":[103152,103151],
    "yachts": [
    {
        "id": 103152,
        "name": "Sea Star",
        "companyId": 201,
        "baseId": 102166,
        "locationId": 62,
        "yachtModelId": 263,
        "draft": 1.8,
        "cabins": 2,
        "cabinsCrew": 0,
        "berthsCabin": 4,
        "berthsSalon": 2,
        "berthsCrew": 0,
        "berthsTotal": 6,
        "wc": 1,
        "wcCrew": 0,
        "buildYear": 2013,
        "engines": 1,
        "enginePower": 19,
        "steeringTypeId": 2,
        "sailTypeId": 1,
        "sailRenewed": 2015,
        "genoaTypeId": 1,
        "genoaRenewed": 2015,
        "standardYachtEquipment": [
            {
                "id": 14232,
            "quantity": 1,
            "equipmentId": 17,
            "comment": {}
        },
        {
            "id": 14229,
            "quantity": 1,
            "equipmentId": 100619,
            "comment": {}
        },
```

```
    {
    "id": 14241,
    "quantity": 1,
    "equipmentId": 13,
    "comment": {}
    }
    ],
    "euminia": {
    "cleanliness": "4.83",
    "equipment": "4.79",
    "personalService": "4.78",
    "pricePerformance": "4.67",
    "recommendation": "100 %",
    "total": "4.79",
    "reviews": "6"
    },
    "fourStarCharter": true,
    "mainPictureUrl": "https://ws.nausys.com/CBMS-external/rest/yacht/103152/pictures/main.jpg",
    "picturesURL": [
    "https://ws.nausys.com/CBMS-external/rest/yacht/103152/pictures/main.jpg",
    "https://ws.nausys.com/CBMS-external/rest/yacht/103152/pictures/layout.jpg",
    "https://ws.nausys.com/CBMS-external/rest/yacht/103152/pictures/layout.jpg",
    "https://ws.nausys.com/CBMS-external/rest/yacht/103152/pictures/main.jpg",
    "https://ws.nausys.com/CBMS-external/rest/yacht/103152/pictures/slika (3).jpg",
    "https://ws.nausys.com/CBMS-external/rest/yacht/103152/pictures/slika (4).jpg",
    "https://ws.nausys.com/CBMS-external/rest/yacht/103152/pictures/slika (5).jpg"
    ],
    "commission": 0.19,
    "deposit": 1050,
    "maxDiscount": 0.15,
    "seasonSpecificData": [
    {
        "seasonId": 590017,
        "additionalYachtEquipment": [
        {
            "id": 14247,
            "quantity": 1,
            "price": "80.00",
            "equipmentId": 19,
            "comment": {},
            "priceMeasureId": 1,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": {}
        },
        {
            "id": 14248,
            "quantity": 1,
            "price": "80.00",
            "equipmentId": 51,
            "comment": {},
            "priceMeasureId": 1,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": {}
        }
    ],
    "services": [
    {
        "id": 502399,
        "serviceld": 53,
        "price": "50.00",
        "priceMeasureId": 54,
        "calculationType": "SEPARATE_PAYMENT",
        "description": {},
        "obligatory": false
    },
    {
        "id": 502400,
        "serviceld": 101660,
        "price": "150.00",
        "priceMeasureId": 54,
        "calculationType": "SEPARATE_PAYMENT",
        "description": {
```

```
            "textDE": "+ 200 EUR refundable",
            "textEN": "+ 200 EUR refundable",
            "textHR": "+ 200 EUR povratno"
        ],
        "obligatory": false
    }
    ],
    "prices": [
        {
            "dateFrom": "01.01.2014",
            "dateTo": "23.05.2014",
            "price": 930,
            "currency": "EUR",
            "type": "WEEKLY",
            "locationsId": [
                68
        ]
    },
    {
        "dateFrom": "20.09.2014",
        "dateTo": "31.12.2014",
        "price": 930,
        "currency": "EUR",
        "type": "WEEKLY",
        "locationsId": [
            68
        ]
    }
    ],
    "regularDiscounts": [
        {
            "discountItemId": 1,
            "amount": 5,
            "type": "PERCENTAGE"
        ],
        {
            "discountItemId": 100509,
            "amount": 5,
            "type": "PERCENTAGE"
        }
    ]
    ],
    {
        "seasonId": 593249,
        "additionalYachtEquipment": [
        {
            "id": 14247,
            "quantity": 1,
            "price": "80.00",
            "equipmentId": 19,
            "comment": [],
            "priceMeasureId": 1,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": {}
        ],
        {
            "id": 14248,
            "quantity": 1,
            "price": "80.00",
            "equipmentId": 51,
            "comment": [],
            "priceMeasureId": 1,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": {}
    }
    ],
    "services": [
        {
            "id": 590003,
            "serviceld": 53,
            "price": "50.00",
            "priceMeasureId": 54,
```

```
        "calculationType": "SEPARATE_PAYMENT",
        "description": [],
        "obligatory": false
    },
    {
        "id": 590004,
        "serviceld": 101660,
        "price": "150.00",
        "priceMeasureId": 54,
        "calculationType": "SEPARATE_PAYMENT",
        "description": {
            "textDE": "+ 200 EUR refundable",
            "textEN": "+ 200 EUR refundable",
            "textHR": "+ 200 EUR povratno"
        },
        "obligatory": false
    }
    ],
    "prices": [
        {
            "dateFrom": "19.09.2015",
            "dateTo": "31.12.2015",
            "price": 930,
            "currency": "EUR",
            "type": "WEEKLY"
        },
        {
            "dateFrom": "01.01.2015",
            "dateTo": "22.05.2015",
            "price": 930,
            "currency": "EUR",
            "type": "WEEKLY"
        }
    ],
    "regularDiscounts": [
        {
            "discountItemId": 100509,
            "amount": 5,
            "type": "PERCENTAGE"
        },
        {
            "discountItemId": 5,
            "amount": 10,
            "type": "PERCENTAGE"
        }
        ]
    }
    ],
    "needsOptionApproval": false,
    "canMakeBookingFixed": true,
    "flagsId": [
        100101
    ],
"checkInPeriods": [
{
"dateFrom": "01.01.1970",
"dateTo": "31.12.2019",
"minimalReservationDuration": 3,
"checkInMonday": false,
"checkInTuesday": false,
"checkInWednesday": true,
"checkInThursday": false,
"checkInFriday": false,
```

"checkInSaturday": true,
"checkInSunday": false,
"checkOutMonday": false,
"checkOutTuesday": false,
"checkOutWednesday": true,
"checkOutThursday": false,
"checkOutFriday": false,
"checkOutSaturday": true,
"checkOutSunday": false
],
\{
"dateFrom": "31.12.2019",
"dateTo": "01.01.2999",
"minimalReservationDuration": 7,
"checkInMonday": false,
"checkInTuesday": false,
"checkInWednesday": false,
"checkInThursday": false,
"checkInFriday": false,
"checkInSaturday": true,
"checkInSunday": false,
"checkOutMonday": false,
"checkOutTuesday": false,
"checkOutWednesday": false,
"checkOutThursday": false,
"checkOutFriday": false,
"checkOutSaturday": true,
"checkOutSunday": false
\}
],
"charterType": "BAREBOAT",
"propulsionType": "SAILDRIVE",
"maxDiscountFromCommission" : 0.10000,
"agencyDiscountType" : "Client price"
],
if
"id": 103151,
"name": "Sea King",
"companyId": 201,
"baseId": 102166,
"locationId": 62,
"yachtModelId": 260,
"draft": 2.15,
"cabins": 3,
"cabinsCrew": 0,
"berthsCabin": 6,

```
"berthsSalon": 2,
"berthsCrew": 0,
"berthsTotal": 8,
"wc": 2,
"wcCrew": 0,
"engines": 1,
"enginePower": 56,
"steeringTypeld": 2,
"sailTypeld": 1,
"standardYachtEquipment": [
    {
        "id": 14217,
        "quantity": 1,
        "equipmentId": 6,
        "comment": {}
    },
    {
        "id": 14214,
        "quantity": 1,
        "equipmentId": 15,
        "comment": {}
    }
],
"euminia": {
    "cleanliness": "4.67",
    "equipment": "4.19",
    "personalService": "4.44",
    "pricePerformance": "4.33",
    "recommendation": "100 %",
    "total": "4.39",
    "reviews": "3"
},
"fourStarCharter": true,
"mainPictureUrl": "localhost:58080/CBMS-external/rest/yacht/103151/pictures/main.jpg",
"picturesURL": [
    "localhost:58080/CBMS-external/rest/yacht/103151/pictures/main.jpg",
    "localhost:58080/CBMS-external/rest/yacht/103151/pictures/layout.jpg",
    "localhost:58080/CBMS-external/rest/yacht/103151/pictures/layout.jpg",
    "localhost:58080/CBMS-external/rest/yacht/103151/pictures/main.jpg"
],
"commission": 0.19,
"deposit": 1550,
"maxDiscount": 0.15,
"seasonSpecificData": [
    {
        "seasonId": 590016,
        "additionalYachtEquipment": [
        {
            "id": 14223,
            "quantity": 1,
            "price": "80.00",
            "equipmentId": 19,
            "comment": {},
            "priceMeasureId": 1,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": {}
    },
    {
        "id": 14224,
        "quantity": 1,
        "price": "80.00",
        "equipmentId": 51,
        "comment": {},
        "priceMeasureId": 1,
        "calculationType": "SEPARATE_PAYMENT",
        "condition": {}
    }
],
    "services": [
    {
        "id": 502399,
        "serviceld": 53,
```

```
        "price": "50.00",
        "priceMeasureId": 54,
        "calculationType": "SEPARATE_PAYMENT",
        "description": [],
        "obligatory": false
    },
    {
        "id": 502400,
        "serviceld": 101660,
        "price": "150.00",
        "priceMeasureId": 54,
        "calculationType": "SEPARATE_PAYMENT",
        "description": {
            "textDE": "+ 200 EUR refundable",
            "textEN": "+ 200 EUR refundable",
            "textHR": "+ 200 EUR povratno"
        },
        "obligatory": false
    }
    },
    "prices": [
    {
        "dateFrom": "01.01.2014",
        "dateTo": "23.05.2014",
        "price": 1850,
        "currency": "EUR"
    },
    {
        "dateFrom": "20.09.2014",
        "dateTo": "31.12.2014",
        "price": 1850,
        "currency": "EUR"
    }
    },
    "regularDiscounts": [
    {
        "discountItemId": 1,
        "amount": 5,
        "type": "PERCENTAGE"
    },
    {
        "discountItemId": 100509,
        "amount": 5,
        "type": "PERCENTAGE"
    }
    ]
    }
    "seasonId": 596538,
    "additionalYachtEquipment": [
    {
        "id": 14223,
        "quantity": 1,
        "price": "80.00",
        "equipmentId": 19,
        "comment": [],
        "priceMeasureId": 1,
        "calculationType": "SEPARATE_PAYMENT",
        "condition": {}
    },
    {
        "id": 14224,
        "quantity": 1,
        "price": "80.00",
        "equipmentId": 51,
        "comment": [],
        "priceMeasureId": 1,
        "calculationType": "SEPARATE_PAYMENT",
        "condition": {}
    }
],
    "services": [
```

```
    {
        "id": 590003,
        "serviceld": 53,
        "price": "50.00",
        "priceMeasureId": 54,
        "calculationType": "SEPARATE_PAYMENT",
        "description": {},
        "obligatory": false
    },
    {
        "id": 590004,
        "serviceld": 101660,
        "price": "150.00",
        "priceMeasureId": 54,
        "calculationType": "SEPARATE_PAYMENT",
        "description": {
            "textDE": "+ 200 EUR refundable",
            "textEN": "+ 200 EUR refundable",
            "textHR": "+ 200 EUR povratno"
        },
        "obligatory": false
    }
    ],
    "prices": [
        {
            "dateFrom": "19.09.2015",
            "dateTo": "31.12.2015",
            "price": 1850,
            "currency": "EUR",
            "type": "WEEKLY"
        },
        {
            "dateFrom": "01.01.2015",
            "dateTo": "22.05.2015",
            "price": 1850,
            "currency": "EUR",
            "type": "WEEKLY"
        }
    ],
    "regularDiscounts": [
        {
            "discountItemId": 100509,
            "amount": 5,
            "type": "PERCENTAGE"
        },
        {
            "discountItemId": 5,
            "amount": 10,
            "type": "PERCENTAGE"
        }
        ]
    }
    }
    ],
"checkInPeriods": [
{
"dateFrom": "01.01.1970",
"dateTo": "31.12.2019",
"minimalReservationDuration": 3,
"checkInMonday": false,
"checkInTuesday": false,
"checkInWednesday": true,
"checkInThursday": false,
```

<!-- Pages 61 - 70 -->

"checkInFriday": false,
"checkInSaturday": true,
"checkInSunday": false,
"checkOutMonday": false,
"checkOutTuesday": false,
"checkOutWednesday": true,
"checkOutThursday": false,
"checkOutFriday": false,
"checkOutSaturday": true,
"checkOutSunday": false
],
\{
"dateFrom": "31.12.2019",
"dateTo": "01.01.2999",
"minimalReservationDuration": 7,
"checkInMonday": false,
"checkInTuesday": false,
"checkInWednesday": false,
"checkInThursday": false,
"checkInFriday": false,
"checkInSaturday": true,
"checkInSunday": false,
"checkOutMonday": false,
"checkOutTuesday": false,
"checkOutWednesday": false,
"checkOutThursday": false,
"checkOutFriday": false,
"checkOutSaturday": true,
"checkOutSunday": false
\}
],
"charterType": "BAREBOAT",
"propulsionType": "SAILDRIVE".
"maxDiscountFromCommission" : 0.10000,
"agencyDiscountType" : "Client price"
\}

# All yachts model 

| Params | Values |
| :-- | :-- |

| Description: | Provides all available yacht model |
| :-- | :-- |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/catalogue/v6/yac <br> htModels |
| Request method: | POST |
| Request structure: | RestAuthentication |
| Response structure: | RestYachtModelList |

# Example 

URL:https://ws.nausys.com/CBMS-external/rest/catalogue/v6/yachtModels

## POST param:

```
{
    "username":"XXXXXX@XXX",
    "password":"XXXXXXXXXXX"
}
```

Response:

```
{
    "status": "OK",
    "models": [
        {
            "id": 120254,
            "name": "1 - Custom",
            "yachtCategoryId": 1,
            "yachtBuilderId": 100241,
            "loa": 12.57,
            "beam": 3.45,
            "draft": 1.35,
            "cabins": 4,
            "wc": 2,
            "waterTank": 0,
            "fuelTank": 0,
            "displacement": 0,
"virtualLength": 41
        },
        {
            "id": 837012,
            "name": "Abacus 61 - 3 + 1 cab.",
            "yachtCategoryId": 101,
            "yachtBuilderId": 836999,
            "loa": 18.66,
            "beam": 5.0,
            "draft": 0.88,
            "cabins": 4,
            "wc": 3,
            "waterTank": 0,
            "fuelTank": 0,
            "displacement": 0,
"virtualLength": 61
        }
    ]
}
```

## Single yacht

| Params | Values |
| :-- | :-- |
| Description: | Provides a yacht from a yacht id |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/catalogue/v6/yac <br> ht/\{yachtld\} |
| Request method: | POST |
| Request structure: | RestAuthentication |
| Response structure: | RestYachtList |
| Note: | Using the yacht pictures endpoint retrieves images at their <br> original size, but it is possible to select an image size by using <br> additional "h" and/or "w" parameters. <br> e.g. https://ws.nausys.com/CBMS-external/rest/yacht/10315 <br> 2/pictures/main.jpg?w=600 |

# Example 

URL:https://ws.nausys.com/CBMS-external/rest/catalogue/v6/yacht/103152

## POST param:

```
{
    "username":"XXXXXX8XXX",
    "password":"XXXXXXXXXXX"
}
```

Response:

```
{
    "status":"OK",
    "yachts":[
        {
            "id":103152,
            "name":"Sea Star",
            "companyId":201,
            "baseId":102166,
            "locationId":62,
            "yachtModelId":263,
            "draft":1.8,
            "cabins":2,
            "cabinsCrew":0,
            "berthsCabin":4,
            "berthsSalon":2,
            "berthsCrew":0,
            "berthsTotal":6,
            "wc":1,
            "wcCrew":0,
            "engines":1,
            "enginePower":19,
            "steeringTypeId":2,
            "sailTypeId":1,
            "sailRenewed":2015,
            "genoaTypeId":1,
            "genoaRenewed":2015,
            "standardYachtEquipment":[
            {
            "id":14232,
            "quantity":1,
            "equipmentId":17,
            "comment":[
```

```
    }
},
{
    "id":14229,
    "quantity":1,
    "equipmentId":100619,
    "comment".{
    }
},
{
    "id":14241,
    "quantity":1,
    "equipmentId":13,
    "comment":[
    }
}
],
"euminia":{
    "cleanliness":"4.83",
    "equipment":"4.79",
    "personalService":"4.78",
    "pricePerformance":"4.67",
    "recommendation":"100 %",
    "total":"4.79",
    "reviews":"6"
},
"fourStarCharter":true,
"mainPictureUrl":"https://ws.nausys.com/CBMS-external/rest/yacht/103152/pictures/main.jpg",
"picturesURL":[
    "https://ws.nausys.com/CBMS-external/rest/yacht/103152/pictures/main.jpg",
    "https://ws.nausys.com/CBMS-external/rest/yacht/103152/pictures/layout.jpg",
    "https://ws.nausys.com/CBMS-external/rest/yacht/103152/pictures/layout.jpg",
    "https://ws.nausys.com/CBMS-external/rest/yacht/103152/pictures/main.jpg",
    "https://ws.nausys.com/CBMS-external/rest/yacht/103152/pictures/slika (3).jpg",
    "https://ws.nausys.com/CBMS-external/rest/yacht/103152/pictures/slika (4).jpg",
    "https://ws.nausys.com/CBMS-external/rest/yacht/103152/pictures/slika (5).jpg"
],
"commission":0.19,
"deposit":1050,
"maxDiscount":0.15,
"seasonSpecificData":[
    {
        "seasonId":590017,
        "additionalYachtEquipment":[
            {
                "id":14247,
                "quantity":1,
                "price":"80.00",
                "equipmentId":19,
                "comment":[
            },
            "priceMeasureId":1,
            "calculationType":"SEPARATE_PAYMENT",
            "condition":[
        }
    },
    {
        "id":14248,
        "quantity":1,
        "price":"80.00",
        "equipmentId":51,
        "comment":[
        ],
        "priceMeasureId":1,
        "calculationType":"SEPARATE_PAYMENT",
        "condition":[
```

```
    }
    }
],
"services":[
    {
        "id":502399,
        "serviceId":53,
        "price":"50.00",
        "priceMeasureId":54,
        "calculationType":"SEPARATE_PAYMENT",
        "description":[
        },
        "obligatory":false
    },
    {
        "id":502400,
        "serviceId":101660,
        "price":"150.00",
        "priceMeasureId":54,
        "calculationType":"SEPARATE_PAYMENT",
        "description":[
            "textDE":"+ 200 EUR refundable",
            "textEN":"+ 200 EUR refundable",
            "textHR":"+ 200 EUR povratno"
        },
        "obligatory":false
    }
    ],
    "prices":[
        {
            "dateFrom":"01.01.2014",
            "dateTo":"23.05.2014",
            "price":930,
            "currency":"EUR",
            "type":"WEEKLY",
            "locationsId":[
                68
        ]
    },
    {
        "dateFrom":"20.09.2014",
        "dateTo":"31.12.2014",
        "price":930,
        "currency":"EUR",
        "type":"WEEKLY",
        "locationsId":[
            68
        ]
    }
    ],
    "regularDiscounts":[
        {
            "discountItemId":1,
            "amount":5,
            "type":"PERCENTAGE"
    },
    {
        "discountItemId":100509,
        "amount":5,
        "type":"PERCENTAGE"
    }
    ]
},
{
    "seasonId":593249,
    "additionalYachtEquipment":[
        {
            "id":14247,
            "quantity":1,
            "price":"80.00",
            "equipmentId":19,
```

```
    "comment":{
    },
    "priceMeasureId":1,
    "calculationType":"SEPARATE_PAYMENT",
    "condition":{
    }
    },
    {
    "id":14248,
    "quantity":1,
    "price":"80.00",
    "equipmentId":51,
    "comment":{
    },
    "priceMeasureId":1,
    "calculationType":"SEPARATE_PAYMENT",
    "condition":{
    }
    }
},
"services":[
    {
        "id":590003,
        "serviceId":53,
        "price":"50.00",
        "priceMeasureId":54,
        "calculationType":"SEPARATE_PAYMENT",
        "description":{
        },
        "obligatory":false
    },
    {
        "id":590004,
        "serviceId":101660,
        "price":"150.00",
        "priceMeasureId":54,
        "calculationType":"SEPARATE_PAYMENT",
        "description":{
            "textDE":"+ 200 EUR refundable",
            "textEN":"+ 200 EUR refundable",
            "textHR":"+ 200 EUR povratno"
    },
    "obligatory":false
    }
],
"prices":[
    {
        "dateFrom":"19.09.2015",
        "dateTo":"31.12.2015",
        "price":930,
        "currency":"EUR",
        "type":"WEEKLY"
    },
    {
        "dateFrom":"01.01.2015",
        "dateTo":"22.05.2015",
        "price":930,
        "currency":"EUR",
        "type":"WEEKLY"
    }
],
"regularDiscounts":[
    {
        "discountItemId":100509,
        "amount":5,
        "type":"PERCENTAGE"
    },
```

```
        {
            "discountItemId":5,
                "amount":10,
                "type":"PERCENTAGE"
            }
        }
        }
    ],
    "needsOptionApproval":false,
    "canMakeBookingFixed":true,
    "flagsId":[
        100101
    ],
    "charterType":"BAREBOAT"
    }
    ],
"checkInPeriods": [
{
"dateFrom": "01.01.1970",
"dateTo": "31.12.2019",
"minimalReservationDuration": 3,
"checkInMonday": false,
"checkInTuesday": false,
"checkInWednesday": true,
"checkInThursday": false,
"checkInFriday": false,
"checkInSaturday": true,
"checkInSunday": false,
"checkOutMonday": false,
"checkOutTuesday": false,
"checkOutWednesday": true,
"checkOutThursday": false,
"checkOutFriday": false,
"checkOutSaturday": true,
"checkOutSunday": false
],
{
"dateFrom": "31.12.2019",
"dateTo": "01.01.2999",
"minimalReservationDuration": 7,
"checkInMonday": false,
"checkInTuesday": false,
"checkInWednesday": false,
"checkInThursday": false,
"checkInFriday": false,
"checkInSaturday": true,
"checkInSunday": false,
```

"checkOutMonday": false, "checkOutTuesday": false, "checkOutWednesday": false, "checkOutThursday": false, "checkOutFriday": false, "checkOutSaturday": true, "checkOutSunday": false \} ], "charterType": "BAREBOAT", "propulsionType": "SAILDRIVE" \}

# Yacht reservation 

## All reservations

| Params | Values |
| :-- | :-- |
| Description: | Provides all reservations in given period made by this agency <br> (or charter company depending on credentials). |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/yachtReservation/ <br> v6/reservations |
| Request method: | POST |
| Request structure: | RestYachtReservationsRequest |
| Response structure: | RestYachtReservationList |

## Example

URL: https://ws.nausys.com/CBMS-external/rest/yachtReservation/v6/reservations

POST param:

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| credentials | RestAuthentication |  |
| periodFrom | Date | min check-in date (ignored if reservation <br> ids sent) |
| periodTo | Date | max check-in date (ignored if <br> reservation ids sent) |
| endDateFrom | Date | min check-out date (ignored if <br> reservation ids sent) |

| endDateTo | Date | max check-out date (ignored if reservation ids sent) |
| :--: | :--: | :--: |
| includeWaitingOptions | Boolean | Optional parameter. Used to display waiting options. true or false. |
| reservations | Array of Long | Reservation IDs |
| modifyTimeFrom | DateTime1 | min modify time (ignored if reservation ids sent) |
| modifyTimeTo | DateTime1 | max modify time (ignored if reservation ids sent) |
| displayCurrency | String | Optional parameter (defaults to "DEFAULT") <br> For charter company login possible values are: <br> "DEFAULT" (returns amounts in default reservation currency) <br> "CLIENT" (returns amounts in currency in which the client should pay to charter company) <br> For agency login possible values are: <br> "DEFAULT" (returns amounts in default reservation currency) <br> "CLIENT" (returns amounts in currency in which the client should pay to agency) <br> "COMPANY" (return amounts in currency in which the agency pays to charter company) <br> Important notice for agency login: <br> Selection of displayCurrency affects which payment plans and payments will be returned in the response. <br> If a paid agency selects "CLIENT" or "DEFAULT" displayCurrency, payments plans and payments from client towards agency will be returned. <br> If an agency selects "COMPANY" displayCurrency, payments plans and payments from agency towards charter company will be returned. <br> Otherwise no payment plans and payments will be returned. |

# Example 

```
{
    "credentials": {
    "username": "xxx@xxxxx",
    "password": "xxxxxxxxx"
    },
    "reservations":[1001552,1001553,1001555]
}
```

```
or
{
    "credentials": {
        "username": "xxx@xxxxx",
        "password": "xxxxxxxxx"
    },
    "periodFrom":"23.05.2013",
    "periodTo":"23.05.2013"
}
or
{
    "credentials": {
        "username": "xxx@xxxxx",
        "password": "xxxxxxxxx"
    },
    "endDateFrom":"23.05.2022",
    "endDateTo":"23.05.2022"
}
or
{
    "credentials": {
        "username": "xxx@xxxxx",
        "password": "xxxxxxxxx" },
    "periodFrom":"09.03.2019",
    "periodTo":"16.03.2019",
    "includeWaitingOptions": true
}
```

Response:

```
{"status": "OK",
    "reservations": [
        {"id": 1961723,
            "uuid": "6d1bc4d4-5fd8-44b8-a4d3-d4e7b0225955",
            "reservationStatus": "RESERVATION",
            "yachtId": 829538,
            "periodFrom": "30.05.2015 17:00",
            "periodTo": "06.06.2015 08:30",
            "agency": "test agency",
            "client": {
                "name": "Markus",
                "surname": "DAMBACHER",

<!-- Pages 71 - 80 -->

```
    "countryId": 100158
    ],
    "discounts": [
        {
            "discountItemId": 1,
            "amount": 10.00,
            "type": "PERCENTAGE"
        }
    ],
    "additionalEquipment": [
        {
            "id": 116333,
            "quantity": "1.00",
            "listPrice": "10.00",
            "priceMeasureId": 1,
            "equipmentId": 14,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": {
        }
    ]
    ],
    "services": [
        {
            "id": 2315437,
            "quantity": "1.00",
            "listPrice": "160.00",
            "priceMeasureId": 54,
            "serviceId": 3,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": {
                "textDE": "enthalten: Endreinigung, Taucher Inspektion, Gas, Bettwäsche, Tücher, kroatisch Mobiltelefon (nur für den
internen Gebrauch), Basispaket für Toiletten und Küche",
                "textEN": "includes: Final cleaning, divers inspection, gas, bedding, cloths, croatian mobile phone (for internal usage
only), basic package for toilets and kitchen",
                "textHR": "uključuje: završno čišćenje, podvodnu inspekciju, plin, plahte, kuh.krpe, hrv.mobilni telefon (samo za
internu uporabu), osnovni paket za toalet i kuhinju"
        }
    },
    {
        "quantity": "1.00",
        "listPrice": "0.00",
        "priceMeasureId": 54,
        "serviceId": 477980,
        "calculationType": "ADVANCE_PAYMENT",
        "condition": {
            "textDE": "GRATIS",
            "textEN": "GRATIS",
            "textHR": "GRATIS"
        }
    }
    ],
    "priceListPrice": "3340.00",
    "agencyPrice": "2606.97",
    "clientPrice": "3006.00",
    "paymentCurrency": "EUR",
    "approved": true
    },
    {
    "id": 1976935,
    "uuid": "6d1bc4d4-4fd8-44b8-a4d3-d4e7b0125357",
    "reservationStatus": "RESERVATION",
    "yachtId": 838504,
    "periodFrom": "30.05.2015 17:00",
    "periodTo": "06.06.2015 08:30",
    "agency": "test agency",
    "client": {
        "name": "Nino",
        "surname": "Baumann"
    ],
    "discounts": [
        {
            "discountItemId": 104351,745745
```

```
            "amount": 8.00,
            "type": "PERCENTAGE"
        }
    ],
    "additionalEquipment": [
        {
            "id": 116684,
            "quantity": "1.00",
            "listPrice": "10.00",
            "priceMeasureId": 1,
            "equipmentId": 14,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": {
            }
        ],
        {
            "id": 118883,
            "quantity": "3.00",
            "listPrice": "5.00",
            "priceMeasureId": 101939,
            "equipmentId": 12,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": {
            }
        }
    ],
    "services": [
        {
            "id": 2334644,
            "quantity": "1.00",
            "listPrice": "130.00",
            "priceMeasureId": 54,
            "serviceId": 101958,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": {
            }
        ],
        {
            "id": 2334645,
            "quantity": "1.00",
            "listPrice": "77.00",
            "priceMeasureId": 109923,
            "serviceId": 52,
            "calculationType": "INCLUDED_IN_PRICE",
            "condition": {
                "textIT": "it2"
            }
        }
    ],
    "priceListPrice": "2250.00",
    "agencyPrice": "1734.89",
    "clientPrice": "2070.00",
    "paymentCurrency": "EUR",
    "approved": true
    }
    }
}
```

# All options 

| Params | Values |
| :-- | :-- |
| Description: | Provides all options OR all options + waiting options in given <br> period made by this agency (or charter company depending on <br> the credentials) |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |

| URL: | https://ws.nausys.com/CBMS-external/rest/yachtReservation/ <br> v6/options |
| :-- | :-- |
| Request method: | POST |
| Request structure: | RestYachtReservationsRequest |
| Response structure: | RestYachtReservationList |

# Example 

URL: https://ws.nausys.com/CBMS-external/rest/yachtReservation/v6/options

## POST param:

```
{
    "credentials": {
        "username": "xxx@xxxxx",
        "password": "xxxxxxxxx" },
    "periodFrom":"09.03.2019",
    "periodTo":"16.03.2019"
}
```

OR
\{
"credentials": \{
"username": "xxx@xxxxx",
"password": "xxxxxxxxx" \},
"periodFrom":"09.03.2019",
"periodTo":"16.03.2019",
"includeWaitingOptions": true
\}

## Response:

\{
"status": "OK",
"reservations": [
\{
"id": 265642059,
"uuid": "16675afa-b0a8-4fb5-9a36-ab4b8698410e",
"reservationStatus": "OPTION",
"yachtId": 481471,
"baseFromId": 1030425,
"baseTold": 1030425,
"locationFromId": 68,
"locationTold": 68,
"yachtName": "Elan 434 Impression - Elan - 2008.",
"periodFrom": "09.03.2019 17:00",
"periodTo": "16.03.2019 09:00",

```
    "optionTill": "11.01.2019 23:59",
    "agency": "xxxxxxxxxxxxxxxx",
    "client": {
        "name": "yyyyyyyyyyy",
        "surname": "zzzzzzzzzzzzzzz",
        "countryId": 100158
    },
    "discounts": [
        {
            "discountItemId": 1,
            "amount": 10,
            "type": "PERCENTAGE"
        }
    ],
    "additionalEquipment": [
        {
            "id": 116333,
            "quantity": "1.00",
            "listPrice": "10.00",
            "priceMeasureId": 1,
            "equipmentId": 14,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": {
        }
    }
    ],
    "services": [
        {
            "id": 277211875,
            "quantity": "1.00",
            "listPrice": "0.00",
            "currency": "EUR",
            "priceMeasureId": 54,
            "serviceld": 101958,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": {}
        },
        {
            "id": 277211876,
            "quantity": "1.00",
```

```
        "listPrice": "140.00",
        "currency": "EUR",
        "priceMeasureId": 54,
        "serviceId": 100519,
        "calculationType": "SEPARATE_PAYMENT",
        "condition": {
            "textIT": "i1"
        }
    }
    ],
    "priceListPrice": "6000.00",
    "agencyPrice": "4444.25",
    "clientPrice": "5400.00",
    "currency": "EUR",
    "paymentCurrency": "EUR",
    "localizedFinalPrice": "5400.00",
    "createdDate": "06.01.2019",
    "approved": true
    },
    {
    "id": 266090327,
    "uuid": "6ed25bc0-ba7a-4abb-8fab-74f1f2e9764b",
    "reservationStatus": "OPTION",
    "yachtId": 102801,
    "baseFromId": 102753,
    "baseToId": 102753,
    "locationFromId": 51,
    "locationToId": 51,
    "yachtName": "Adria 1002 Vektor - Vjeko - 2006.",
    "periodFrom": "09.03.2019 14:00",
    "periodTo": "16.03.2019 08:00",
    "optionTill": "24.02.2019 23:59",
    "agency": "Testna agencija",
    "discounts": [
        {
            "discountItemId": 1,
            "amount": 10,
            "type": "PERCENTAGE"
        }
    ],
    "services": [
```

```
    {
        "id": 277579005,
        "quantity": "1.00",
        "listPrice": "140.00",
        "currency": "EUR",
        "priceMeasureId": 54,
        "serviceId": 472548,
        "calculationType": "SEPARATE_PAYMENT",
        "condition": {
            "textIT": "i8"
        }
    },
    {
        "id": 277579006,
        "quantity": "1.00",
        "listPrice": "0.00",
        "currency": "EUR",
        "priceMeasureId": 54,
        "serviceId": 101958,
        "calculationType": "SEPARATE_PAYMENT",
        "condition": {}
    }
    ],
    "priceListPrice": "2100.00",
    "agencyPrice": "1555.49",
    "clientPrice": "1890.00",
    "currency": "EUR",
    "paymentCurrency": "EUR",
    "localizedFinalPrice": "1890.00",
    "createdDate": "21.02.2019",
    "approved": true
    },
    {
    "id": 266091376,
    "uuid": "0cce1c5f-e437-4397-8603-b61f26016e62",
    "reservationStatus": "OPTION",
    "yachtId": 102801,
    "baseFromId": 102753,
    "baseToId": 102753,
    "locationFromId": 51,
```

"locationTold": 51,
"yachtName": "Adria 1002 Vektor - Vjeko - 2006.",
"periodFrom": "16.03.2019 14:00",
"periodTo": "23.03.2019 08:00",
"optionTill": "24.02.2019 23:59",
"agency": "Testna agencija",
"discounts": [
\{
"discountItemId": 1,
"amount": 10,
"type": "PERCENTAGE"
\}
],
"services": [
\{
"id": 277580167,
"quantity": "1.00",
"listPrice": "140.00",
"currency": "EUR",
"priceMeasureId": 54,
"serviceld": 472548,
"calculationType": "SEPARATE_PAYMENT",
"condition": \{
"textIT": "i8"
\}
\},
\{
"id": 277580168,
"quantity": "1.00",
"listPrice": "0.00",
"currency": "EUR",
"priceMeasureId": 54,
"serviceld": 101958,
"calculationType": "SEPARATE_PAYMENT",
"condition": \{\}
\}
],
"priceListPrice": "2100.00",
"agencyPrice": "1555.49",
"clientPrice": "1890.00",
"currency": "EUR",

```
    "paymentCurrency": "EUR",
    "localizedFinalPrice": "1890.00",
    "createdDate": "21.02.2019",
    "approved": true
},
{
    "id": 266102003,
    "uuid": "1e74cd34-0dcb-425b-99b9-49f16cb64fa8",
    "reservationStatus": "OPTION",
    "yachtId": 479292,
    "baseFromId": 102753,
    "baseToId": 102753,
    "locationFromId": 51,
    "locationToId": 51,
    "yachtName": "Bavaria 32 - Whispper - 2004.",
    "periodFrom": "09.03.2019 14:00",
    "periodTo": "16.03.2019 08:00",
    "optionTill": "25.02.2019 23:59",
    "agency": "Testna agencija",
    "discounts": [
        {
            "discountItemId": 1,
            "amount": 10,
            "type": "PERCENTAGE"
        }
    ],
    "services": [
        {
            "id": 277588202,
            "quantity": "1.00",
            "listPrice": "0.00",
            "currency": "EUR",
            "priceMeasureId": 54,
            "serviceId": 101958,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": {}
        },
        {
            "id": 277588203,
            "quantity": "1.00",
```

```
    "listPrice": "100.00",
    "currency": "EUR",
    "priceMeasureId": 54,
    "serviceId": 472548,
    "calculationType": "SEPARATE_PAYMENT",
    "condition": {
        "textIT": "i5"
        }
    }
    ],
    "priceListPrice": "950.00",
    "agencyPrice": "703.67",
    "clientPrice": "855.00",
    "currency": "EUR",
    "paymentCurrency": "EUR",
    "localizedFinalPrice": "855.00",
    "createdDate": "22.02.2019",
    "approved": true
    },
    {
    "id": 266102180,
    "uuid": "6bc7efab-0abb-4316-8ea3-d0fa8a6f84f1",
    "reservationStatus": "OPTION",
    "yachtId": 102802,
    "baseFromId": 102751,
    "baseToId": 102751,
    "locationFromId": 57,
    "locationToId": 57,
    "yachtName": "Athena 38 - Maria's Pleasure - 2003.",
    "periodFrom": "09.03.2019 17:00",
    "periodTo": "16.03.2019 09:00",
    "optionTill": "25.02.2019 23:59",
    "agency": "Testna agencija",
    "discounts": [
        {
            "discountItemId": 1,
            "amount": 14,
            "type": "PERCENTAGE"
        }
    ],
    "services": [
```

```
        {
            "id": 277588361,
            "quantity": "1.00",
            "listPrice": "140.00",
            "currency": "EUR",
            "priceMeasureId": 54,
            "serviceId": 472548,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": {
                "textIT": "i8"
            }
        },
        {
            "id": 277588362,
            "quantity": "1.00",
            "listPrice": "0.00",
            "currency": "EUR",
            "priceMeasureId": 54,
            "serviceId": 101958,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": {}
        }
    ],
    "priceListPrice": "2500.00",
    "agencyPrice": "1959.73",
    "clientPrice": "2150.00",
    "currency": "EUR",
    "paymentCurrency": "EUR",
    "localizedFinalPrice": "2150.00",
    "createdDate": "22.02.2019",
    "approved": false
    }
    }
}
```

# Free yacht 

| Params | Values |
| :-- | :-- |
| Description: | Provides all free yachts in given criteria |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |

<!-- Pages 81 - 90 -->

| URL: | https://ws.nausys.com/CBMS-external/rest/yachtReservation/ <br> v6/freeYachts |
| :-- | :-- |
| Request method: | POST |
| Request structure: | RestFreeYachtsRequest |
| Response structure: | RestFreeYachtList |

# Example 

URL: https://ws.nausys.com/CBMS-external/rest/yachtReservation/v6/freeYachts

## POST param:

```
{
"credentials":("username":"xxx@xxxxx","password":"xxxxxxxxxx"},
  "periodFrom":"23.05.2015",
  "periodTo":"30.05.2015",
  "yachts":[302,557323,101723]
}
```

## Response:

```
{
  "status": "OK",
  "periodFrom": "23.05.2015",
  "periodTo": "30.05.2015",
  "freeYachts": [
    {
    "periodFrom": "23.05.2015",
    "periodTo": "30.05.2015",
    "yachtId": 302,
    "locationFromId": 55,
    "locationToId": 55,
    "price": {
        "priceListPrice": "3350.00",
        "clientPrice": "3350.00"
    }
    },
    {
    "periodFrom": "23.05.2015",
    "periodTo": "30.05.2015",
    "yachtId": 557323,
    "locationFromId": 53,
    "locationToId": 53,
    "price": {
        "priceListPrice": "3300.00",
        "clientPrice": "2805.00",
        "discounts": [
```

```
        {
            "discountItemId": 1,
            "amount": 15,
            "type": "PERCENTAGE"
        }
        ]
    }
    },
    {
    "periodFrom": "23.05.2015",
    "periodTo": "30.05.2015",
    "yachtId": 101723,
    "locationFromId": 54,
    "locationToId": 54,
    "price": {
        "priceListPrice": "3300.00",
        "clientPrice": "2805.00",
        "discounts": [
            {
                "discountItemId": 1,
                "amount": 15,
                "type": "PERCENTAGE"
            }
        ]
    },
    "paymentPlans": [
        {
            "date": "23.01.2015",
            "percentage": 30
        },
        {
            "date": "01.05.2015",
            "percentage": 70
        }
        ]
    }
    ]
}
```

Free yacht search criteria

| Params | Values |
| :-- | :-- |
| Description: | Provides all search criteria |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/yachtReservation/ <br> v6/freeYachtsSearchCriteria |
| Request method: | POST |
| Request structure: | RestAuthentication |
| Response structure: | RestFreeYachtsSearchCriteria |

# Example 

URL: https://ws.nausys.com/CBMS-external/rest/yachtReservation/v6/freeYachtsSearchCriteria

## POST param:

\{
"username":"XXXXXX@XXX",
"password":"XXXXXXXXXXX"
\}

Response:

```
{"status": "OK",
    "countries": [
        1,
        100143,
        100174,
        100119
    ],
    "regions": [
        555430,
        555308,
        555373
    ],
    "locations": [
        972887,
        482314,
        482315,
        1
    ],
    "yachtBuilders": [
        832736,
        1,
        100330,
        515208,
        112740
    ],
    "yachtCategories": [
        102,
        51,
        120895,
        1
    ],
    "equipment": [
        1,
        2,
        3,
        933728,
        4
    ],
    "sailTypes": [
        1,
        3,
        4,
        112782
    ]
}
```

# Free yachts search 

| Params | Values |
| :-- | :-- |
| Description: | Provides all available yachts in given period |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/yachtReservation/ <br> v6/freeYachtsSearch |
| Request method: | POST |
| Request structure: | RestFreeYachtsSearchRequest |
| Response structure: | RestFreeYachtsSearchResponse |

## Example

URL: https://ws.nausys.com/CBMS-external/rest/yachtReservation/v6/freeYachtsSearch

```
POST param:
{
    "credentials": {
        "username":"xxx@xxxx",
        "password":"xxxxxxxxxx"
    },
    "periodFrom":"04.06.2016",
    "periodTo":"11.06.2016",
    "countries":[1],
"resultsPerPage":5,
"resultsPage":2
}
```

# Response: 

\{"status": "OK",
"from": "04.06.2016",
"to": "11.06.2016",
"totalCount": 1173,
"totalPages": 235,
"currentPage": 1,
"resultsPerPage": 5,
"startIdx": 0,
"endIdx": 4,
"freeYachtsInPeriod": [
\{
"periodFrom": "04.06.2016",
"periodTo": "11.06.2016",
"yachtId": 557323,
"locationFromId": 53,
"locationToId": 53,
"price": \{
"priceListPrice": "3300.00",
"clientPrice": "2805.00",
"discounts": [
"discountItemId": 1,
"amount": 15.00,
"type": "PERCENTAGE"
\}
\}
\}
\},
\{
"periodFrom": "04.06.2016",
"periodTo": "11.06.2016",
"yachtId": 946036,
"locationFromId": 53,
"locationToId": 53,
"price": \{
"priceListPrice": "3542.00",
"clientPrice": "3542.00"
\}
\},
\{
"periodFrom": "04.06.2016",
"periodTo": "11.06.2016",
"yachtId": 828340,
"locationFromId": 53,
"locationToId": 53,
"price": \{
"priceListPrice": "2890.00",
"clientPrice": "2456.50",
"discounts": [
\{
"discountItemId": 1,
"amount": 15.00,

```
                    "type": "PERCENTAGE"
                }
            ]
        }
    }
    }
    "periodFrom": "04.06.2016",
        "periodTo": "11.06.2016",
        "yachtId": 120098,
        "locationFromId": 53,
        "locationTold": 53,
        "price": [
            "priceListPrice": "2200.00",
            "clientPrice": "1870.00",
            "discounts": [
                {
                    "discountItemId": 1,
                    "amount": 15.00,
                    "type": "PERCENTAGE"
                }
            ]
        }
    },
    {
        "periodFrom": "04.06.2016",
        "periodTo": "11.06.2016",
        "yachtId": 1044977,
        "locationFromId": 53,
        "locationTold": 53,
        "price": [
            "priceListPrice": "2300.00",
            "clientPrice": "1955.00",
            "discounts": [
                {
                    "discountItemId": 1,
                    "amount": 15.00,
                    "type": "PERCENTAGE"
                }
            ]
        },
        "paymentPlans": [
            {
                "date": "01.04.2016",
                "percentage": 30
            },
            {
                "date": "20.06.2016",
                "percentage": 70
            }
        ]
    }
}
```

# Occupancy 

| Params | Values |
| :-- | :-- |
| Description: | Provides all reservations for specified company in specified <br> year regardless who made them. |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/yachtReservation/ <br> v6/occupancy/\{companyId\}/\{year\} |
| Request method: | POST |
| Request structure: | RestAuthentication |

# Example 

URL: https://ws.nausys.com/CBMS-external/rest/yachtReservation/v6/occupancy/102701/2025

## POST param:

```
{
    "username":"XXXXXX@XXX",
    "password":"XXXXXXXXXXX"
}
```

Response:

```
{
"companyId":102701,
"year":2013,
"reservations":
[
"id":783023,
"yachtId":302,
"locationFromId":201,
"locationToId":201,
"reservationType":"RESERVATION",
"periodFrom":"24.04.2013",
"checkInTime":"15:00:00",
"periodTo":"27.04.2013",
"checkOutTime":"09:00:00"
}],
"id":1121313,
"yachtId":302,
"locationFromId":201,
"locationToId":201,
"reservationType":"OPTION",
"periodFrom":"05.10.2013",
"checkInTime":"15:00:00",
"periodTo":"26.10.2013",
"checkOutTime":"09:00:00",
"optionValidTill":"25.10.2013 23:59:59"
}
}
}
```

## Occupancy2

| Params | Values |
| :-- | :-- |
| Description: | Provides all reservations for specified company in specified <br> season regardless who made them. <br> Season ID is available from All seasons service. |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/yachtReservation/ <br> v6/occupancy2 /{companyld}/{seasonld} |
| Request method: | POST |
| Request structure: | RestAuthentication |
| Response structure: | RestYachtReservationOccupancyList |

## Example

URL: https://ws.nausys.com/CBMS-external/rest/yachtReservation/v6/occupancy2/102701/3579675

# POST param: 

\{
"username":"xxxx@xxxxx",
"password":"xxxxx"
\}
Response:
\{
"companyId":102701,
"seasonId":3579675,
"reservations":
$[$
\{
"id":783023,
"yachtId":302,
"locationFromId":201,
"locationToId":201,
"reservationType":"RESERVATION",
"periodFrom":"24.04.2013",
"checkInTime":"15:00:00",
"periodTo":"27.04.2013",
"checkOutTime":"09:00:00"
\}, $\{$
"id":1121313,
"yachtId":302,
"locationFromId":201,
"locationToId":201,
"reservationType":"OPTION",
"periodFrom":"05.10.2013",
"checkInTime":"15:00:00",
"periodTo":"26.10.2013",
"checkOutTime":"09:00:00",
"optionValidTill":"25.10.2013 23:59:59"
\}
]
\}
Free cabin package search criteria

| Params | Values |
| :-- | :-- |
| Description: | Provides all search criteria |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |

| URL: | https://ws.nausys.com/CBMS-external/rest/yachtReservation/ <br> v6/freeCabinPackageSearchCriteria |
| :-- | :-- |
| Request method: | POST |
| Request structure: | RestAuthentication |
| Response structure: | RestFreeCabinPackageSearchCriteria* |

# Example 

URL: https://ws.nausys.com/CBMS-external/rest/yachtReservation/v6/freeCabinPackageSearchCriteria

## POST param:

```
{
    "username":"XXXXXX@XXX",
    "password":"XXXXXXXXXXX"
}
```

Response:

```
{
    "status": "OK",
    "countries": "1",
    "regions": [
        "512259",
        "557576",
        "557577",
        "557579",
        "557580"
    ],
    "locations": [
        "53",
        "51",
        "68",
        "70",
        "61",
        "55",
        "54",
        "5168287",
        "57"
    ],
    "packages": "10311851"
}
```

Free cabin package search

| Params | Values |
| :-- | :-- |
| Description: | Provides all available yachts in given period |

| Consumes: | JSON (content type: application/json) |
| :-- | :-- |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/yachtReservation/ <br> v6/freeCabinPackageSearch |
| Request method: | POST |
| Request structure: | RestFreeCabinPackageSearchRequest |
| Response structure: | RestFreeCabinPackageList |

# Example 

URL: https://ws.nausys.com/CBMS-external/rest/yachtReservation/v6/freeCabinPackageSearch

## POST param:

\{
"credentials": \{
"username": "XXX@XXXXX",
"password": "XXXXXXXXXX"
\},
"periodFrom": "01.08.2019",
"periodTo": "10.08.2019",
"locations": [],
"countries": [],
"regions": [],
"packages": []
\}

## Response:

\{
"status": "OK",
"freeCabinPackages": [
\{
"packageld": 10234055,
"cabinPackagePeriods": [
\{
"periodFrom": "01.08.2019",
"periodTo": "08.08.2019",
"freeCabins": [
\{
"cabinld": 10279571,
"numberOfFreeCabins": 2,
"prices": \{
"price1": "200.00000",

<!-- Pages 91 - 100 -->

```
        "price2": "150.00000",
        "discounts": [
        {
            "discountItemId": 1525416,
            "amount": 15,
            "type": "PERCENTAGE"
        }
        ]
    }
    },
    {
    "cabinId": 10174571,
    "numberOfFreeCabins": 1,
    "prices": {
        "price1": "280.00000",
        "price2": "200.00000",
        "discounts": [
        {
            "discountItemId": 1525416,
            "amount": 15,
            "type": "PERCENTAGE"
        }
        ]
    }
    }
    ]
    },
{
    "periodFrom": "08.08.2019",
    "periodTo": "15.08.2019",
    "freeCabins": [
    {
        "cabinId": 10279571,
        "numberOfFreeCabins": 2,
        "prices": {
            "price1": "200.00000",
            "price2": "150.00000",
            "discounts": [
            {
            "discountItemId": 1525416,
```

```
        "amount": 15,
        "type": "PERCENTAGE"
        }
        ]
        }
        },
        {
        "cabinId": 10174571,
        "numberOfFreeCabins": 1,
        "prices": {
            "price1": "280.00000",
            "price2": "200.00000",
            "discounts": [
                {
            "discountItemId": 1525416,
            "amount": 15,
            "type": "PERCENTAGE"
            }
            ]
        }
        }
        ]
        ]
    }
    ]
    }
    }
    "packageId": 10311851,
    "cabinPackagePeriods": [
    {
        "periodFrom": "22.07.2019",
        "periodTo": "04.08.2019",
        "freeCabins": [
        {
            "cabinId": 10279571,
            "numberOfFreeCabins": 2,
            "prices": {
            "price1": "1000",
            "price2": "800",
            "discounts": [
            {
                "discountItemId": 1525416,
```

```
        "amount": 15,
        "type": "PERCENTAGE"
        }
        ]
        }
        },
        {
        "cabinld": 10174571,
        "numberOfFreeCabins": 1,
        "prices": {
            "price1": "1300",
            "price2": "1000",
            "discounts": [
                {
            "discountltemld": 1525416,
            "amount": 15,
            "type": "PERCENTAGE"
            }
            ]
        }
        }
        ]
        ]
        }
    ]
    }
    ]
}
```

# Cabin Charter Occupancy 

| Params | Values |
| :-- | :-- |
| Description: | Provides all available yachts in given period |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/yachtReservation <br> /v6/cabinCharterOccupany/[companyld]/[seasonld] |
| Request method: | POST |
| Request structure: | RestAuthentication |
| Response structure: | RestOccupancyList |

## Example

URL: https://ws.nausys.com/CBMS-external/rest/yachtReservation/v6/cabinCharterOccupancy/102701/7755128

# POST param: 

```
{
    "username":"xxxx@xxxxxx",
    "password":"xxxxxx"
}
```

## Response:

```
{
    "status": "OK",
    "occupancy": [
    {
        "packageId": 10234055,
        "rows": [
        {
            "periodFrom": "01.08.2019",
            "periodTo": "08.08.2019",
            "cabinOccupancy": [
            {
            "cabinDefinitionId": 10279571,
            "availableNumberOfCabins": 2,
            "maximumNumberOfCabins": 2,
            "numberOfOptions": 0
        },
        {
            "cabinDefinitionId": 10174571,
            "availableNumberOfCabins": 1,
            "maximumNumberOfCabins": 1,
            "numberOfOptions": 0
        }
    ]
    },
    {
        "periodFrom": "08.08.2019",
        "periodTo": "15.08.2019",
        "cabinOccupancy": [
            {
            "cabinDefinitionId": 10279571,
```

```
        "availableNumberOfCabins": 2,
        "maximumNumberOfCabins": 2,
        "numberOfOptions": 0
        },
        {
        "cabinDefinitionId": 10174571,
        "availableNumberOfCabins": 1,
        "maximumNumberOfCabins": 1,
        "numberOfOptions": 0
        }
        ]
        }
    ]
    },
    {
    "packageId": 10311851,
    "rows": [
        {
        "periodFrom": "22.07.2019",
        "periodTo": "04.08.2019",
        "cabinOccupancy": [
        {
            "cabinDefinitionId": 10279571,
            "availableNumberOfCabins": 2,
            "maximumNumberOfCabins": 2,
            "numberOfOptions": 0
        },
        {
        "cabinDefinitionId": 10174571,
        "availableNumberOfCabins": 1,
        "maximumNumberOfCabins": 1,
        "numberOfOptions": 0
        }
        ]
        }
    ]
    }
    ]
}
```

# Waiting Options 

| Params | Values |
| :-- | :-- |
| Description: | Provides number of waiting options for boat on given period |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/yachtReservation/ <br> v6/waitingOptions |
| Request method: | POST |
| Request structure: | RestWaitingOptionsRequest |
| Response structure: | RestWaitingOptionsResponse |

## Example

URL: https://ws.nausys.com/CBMS-external/rest/yachtReservation/v6/waitingOptions

## POST param:

\{
"credentials": \{
"username": "xxxx@xxxxxx",
"password": "xxxx"
\},
"periodFrom": "20.10.2021",
"periodTo": "25.10.2021",
"yacht": 479293
\}

## Response:

["waitingOptions":"6","status":"OK","id: 890270154":"queuePosition: 2","id: 890270202":"queuePosition: 4"]

## Occupancy3

| Params | Values |
| :-- | :-- |
| Description: | Provides all reservations for specified company's single yacht <br> regardless who made them. |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/yachtReservation/ <br> v6/occupancy3/[companyld]/[yachtld] |
| Request method: | POST |
| Request structure: | RestAuthentication |
| Response structure: | RestYachtReservationOccupancyList |

## Example

URL: https://ws.nausys.com/CBMS-external/rest/yachtReservation/v6/occupancy3/102701/102801

# POST param: 

```
{
    "username":"XXXXXX@XXX",
    "password":"XXXXXXXXXXX"
}
```

Response:

```
{
    "status":"OK",
    "companyId":102701,
    "reservations":[
        {
            "checkInTime":"17:00:00",
            "checkOutTime":"09:00:00",
            "id":886283029,
            "locationFromId":51,
            "locationToId":51,
            "periodFrom":"09.04.2022",
            "periodTo":"16.04.2022",
            "reservationType":"RESERVATION",
            "yachtId":102801
        },
        {
            "checkInTime":"17:00:00",
            "checkOutTime":"09:00:00",
            "id":890240623,
            "locationFromId":51,
            "locationToId":51,
            "periodFrom":"08.05.2022",
            "periodTo":"15.05.2022",
            "reservationType":"RESERVATION",
            "yachtId":102801
        }
    ]
}
```

## All Infos

## Example

URL: http://ws.nausys.com/CBMS-external/rest/yachtReservation/v6/infos

## POST param:

|  Params | Values  |
| --- | --- |
|  Description: | Provides all infos in given period made by this agency (or
charter company depending on credentials).  |
|  Consumes: | JSON (content type: application/json)  |
|  Produces: | JSON (content type: application/json)  |
|  URL: | http://ws.nausys.com/CBMS-external/rest/yachtReservation/v
6/infos  |
|  Request method: | POST  |
|  Request structure: | RestYachtReservationsRequest  |
|  Response structure: | RestYachtReservationList  |

# All stornos

## Example

URL: https://ws.nausys.com/CBMS-external/rest/yachtReservation/v6/stornos POST param:

|  Params | Values  |
| --- | --- |
|  Description: | Provides all stornos in given period made by this agency (or
charter company depending on credentials).  |
|  Consumes: | JSON (content type: application/json)  |
|  Produces: | JSON (content type: application/json)  |
|  URL: | http://ws.nausys.com/CBMS-external/rest/yachtReservation/v
6/stornos  |
|  Request method: | POST  |
|  Request structure: | RestYachtReservationsRequest  |
|  Response structure: | RestYachtReservationList  |

## Response:

[ "status": "OK", "reservations": [ [ "additionalEquipment": [], "agencyPrice": "2142.86", "approved": true, "baseFromId": 102755, "baseToId": 102755, "bookingType": "BAREBOAT", "canceledAt": "16.02.2022 00:07:58",

```
"canceledBy": 1801,
"client": {
    "address": "Bihaćka 3a",
    "city": "Split",
    "company": true,
    "countryId": 1,
    "id": 337012,
    "name": "Lavčević d.o.o.",
    "vatNr": "123456789101",
    "zip": "21000"
},
"clientPrice": "2142.86",
"comments": [],
"createdDate": "08.02.2022",
"currency": "EUR",
"discounts": [],
"domainId": 1201,
"extendedOwnerBooking": false,
"id": 889570076,
"lastModifiedAt": "16.02.2022 00:07",
"locationFromId": 55,
"locationToId": 55,
"numberOfPayments": 0,
"optionMadeAt": "08.02.2022 11:26:00",
"optionMadeBy": 1801,
"ownerBooking": false,
"paymentCurrency": "EUR",
"paymentPlans": [],
"payments": [],
"periodFrom": "24.09.2022 20:00",
"periodTo": "29.09.2022 09:00",
"priceListPrice": "2142.86",
"reservationStatus": "STORNO",
"restYachtReservationComments": [],
"salesAgentId": 1801,
"salesAgentName": "Antonio Kadić",
"securityDeposit": "1550.00",
"services": [],
"useDepositPayment": false,
"uuid": "d2075e4b-5d44-46c2-b2e7-e5fefd309143",
"yachtId": 103451,
```

```
    "yachtName": "Bavaria Cruiser 45 - 4 cab. - Roza - 2011."
},
{
    "additionalEquipment": [],
    "agency": "Testna agencija",
    "agencyAdditionalDiscountAmount": "0.00",
    "agencyClient": {
        "name": "Test",
        "surname": "Test"
    },
    "agencyClientFinalPrice": "3610.00",
    "agencyPrice": "3290.53",
    "approved": true,
    "baseFromId": 102751,
    "baseToId": 102751,
    "bookingType": "BAREBOAT",
    "canceledAt": "18.02.2022 00:08:14",
    "canceledBy": 1801,
    "clientPrice": "3610.00",
    "comments": [],
    "createdDate": "11.02.2022",
    "currency": "EUR",
    "discounts": [
        {
            "amount": 5,
            "discountItemId": 110004,
            "type": "PERCENTAGE"
        },
        {
            "amount": 5,
            "discountItemId": 1,
            "type": "PERCENTAGE"
        }
    ],
    "domainId": 1201,
    "effectiveAgencyCommissionAmountWithoutVAT": "319.47",
    "id": 889642038,
    "lastModifiedAt": "18.02.2022 00:08",
    "locationFromId": 57,
    "locationToId": 57,
```

<!-- Pages 101 - 110 -->

"numberOfPayments": 0,
"optionMadeAt": "11.02.2022 13:19:34",
"optionMadeBy": -1 ,
"paymentCurrency": "EUR",
"paymentPlans": [],
"payments": [],
"periodFrom": "02.07.2022 17:00",
"periodTo": "09.07.2022 09:00",
"priceListPrice": "4000.00",
"reservationStatus": "STORNO",
"restYachtReservationComments": [],
"salesAgentId": 1801,
"salesAgentName": "Antonio Kadić",
"securityDeposit": "1300.00",
"services": [
\{
"amount": "150.00",
"calculationType": "SEPARATE_PAYMENT",
"condition": \{
"textDE": "+ own cabin",
"textEN": "+ own cabin",
"textFR": "+ own cabin",
"textHR": "+ own cabin"
\},
"createdById": 1078450,
"createdTime": "11.02.2022 13:19:34",
"currency": "EUR",
"id": 344881436,
"listPrice": "150.00",
"priceMeasureId": 55,
"quantity": "7.00",
"quantityExtras": "1.00",
"quantityPriceMeasure": "7.00",
"serviceId": 1,
"totalPrice": "1050.00"
\}
],
"useDepositPayment": false,
"uuid": "4e009248-e343-4b53-a842-a9204e26d964",
"yachtId": 102802,
"yachtName": "Bavaria C46 ELECTRIC - Maria's Pleasure - 2003."

```
    }
    ]
}
```

Storno waiting option

|  Params | Values  |
| --- | --- |
|  Description: | Cancels (Storno) a waiting option (waiting option is an
information type marked as "wait for option")  |
|  Consumes: | JSON (content type: application/json)  |
|  Produces: | JSON (content type: application/json)  |
|  URL: | https://ws.nausys.com/CBMS-external/rest/yachtReservation/
v6/waitingOptions/storno/<waitingOptionId>  |
|  Request method: | POST  |
|  Request structure: | RestAuthentication  |
|  Response structure: | RestYachtReservation  |

# Example

URL: https://ws.nausys.com/CBMS-external/rest/yachtReservation/v6/waitingOptions/storno/<waitingOptionId> POST params: \{

```
    "username": "xxxx@xxxxx",
    "password": "xxxx"
}
```

Response: $\square$

```
    "optionMadeAt": "26.11.2024 13:25:00",
    "paymentCurrency": "EUR",
    "paymentPlans": [],
    "payments": [],
    "periodFrom": "05.04.2025 17:00",
    "periodTo": "12.04.2025 09:00",
    "priceListPrice": "4000.00",
    "reservationStatus": "STORNO",
    "restYachtReservationComments": []
    ...
}
or
```

if the user does not have permission to perform operations on the waiting option: {"errorCode":100,"status":"OPERATION_NOT_ALLOWED"}

# Booking

## Create booking

|  Params | Values  |
| --- | --- |
|  Description: | Change the status of the reservation from info or option into
fix booking  |
|  Consumes: | JSON (content type: application/json)  |
|  Produces: | JSON (content type: application/json)  |
|  URL: | https://ws.nausys.com/CBMS-external/rest/booking/v6/crea
eBooking  |
|  Request method: | POST  |
|  Request structure: | RestYachtReservationBookingRequest  |
|  Response structure: | RestYachtReservation  |

## Example

URL: https://ws.nausys.com/CBMS-external/rest/booking/v6/createBooking

## POST param:

$\{$

```
"credentials": {
    "username": "xxx@xxxxx",
    "password":"xxxxxxxxx"
},
"id": 265990764,
"uuid": "4bc44966-cdb6-42f5-aaa9-3cd1907612c4"
}
```

Response: $\square$ $\square$ "id": 265990764, "uuid": "4bc44966-cdb6-42f5-aaa9-3cd1907612c4", "reservationStatus": "RESERVATION", "yachtId": 481848, "periodFrom": "30.05.2015 17:00", "periodTo": "06.06.2015 08:30", "agency": "test agency", "client": [ "name": "Markus", "surname": "DAMBACHER", "countryId": 100158 ], "discounts": [ { "discountItemId": 1, "amount": 10.00, "type": "PERCENTAGE" } ], "additionalEquipment": [

"id": 116333, "quantity": "1.00", "listPrice": "0.00", "priceMeasureId": 1, "equipmentId": 14, "calculationType": "SEPARATE_PAYMENT", "condition": { } } }, "services": { { "id": 2315437, "quantity": "1.00", "listPrice": "160.00", "priceMeasureId": 54, "serviceld": 3, "calculationType": "SEPARATE_PAYMENT", "condition": { "textDE": "enthalten: Endreinigung, Taucher Inspektion, Gas, Bettwäsche, Tücher, kroatisch Mobiltelefon (nur für den internen Gebrauch), Basispaket für Toiletten und Küche", "textEN": "includes: Final cleaning, divers inspection, gas, bedding, cloths, croatian mobile phone (for internal usage only), basic package for toilets and kitchen", "textHR": "uključuje: završno čišćenje, podvodnu inspekciju, plin, plahte, kuh.krpe, hrv.mobilni telefon (samo za internu uporabu), osnovni paket za toalet i kuhinju" } }, { "id": 2315438, "quantity": "1.00", "listPrice": "0.00", "priceMeasureId": 54, "serviceld": 477980, "calculationType": "ADVANCE_PAYMENT", "condition": { "textDE": "GRATIS", "textEN": "GRATIS", "textHR": "GRATIS" } } }, "priceListPrice": "3340.00", "agencyPrice": "2606.97", "clientPrice": "3006.00", "paymentCurrency": "EUR", "approved": true }

# Create cabin charter booking

|  Params | Values  |
| --- | --- |
|  Description: | Change the status of the reservation from info or option into
fix booking  |
|  Consumes: | JSON (content type: application/json)  |
|  Produces: | JSON (content type: application/json)  |
|  URL: | https://ws.nausys.com/CBMS-external/rest/booking/v6/creat
eBooking  |
|  Request method: | POST  |
|  Request structure: | RestYachtReservationBookingRequest  |
|  Response structure: | RestCabinReservation  |

## Example

URL: https://ws.nausys.com/CBMS-external/rest/booking/v6/createBooking

```
POST param:
{
    "credentials": {
        "username": "xxx@xxxxx",
        "password":"xxxxxxxxx"
    },
    "id": 265990764,
    "uuid": "4bc44966-cdb6-42f5-aaa9-3cd1907612c4"
}
```

# Response: 

```
{
    "status": "OK",
    "id": 855489551,
    "uuid": "3720cd44-293a-4648-92ca-4073c7100705",
    "reservationStatus": "RESERVATION",
    "packageld": 10309002,
    "baseFromId": 102754,
    "baseTold": 102754,
    "locationFromId": 61,
    "locationTold": 61,
    "periodFrom": "25.07.2019 08:00",
    "periodTo": "06.08.2019 18:00",
    "client": [
    "company": false,
    "name": "Rest client",
    "email": "somebody@someone.some"
    ],
    "priceListPrice": "300.00",
    "agencyPrice": "255.00",
    "clientPrice": "255.00",
    "currency": "EUR",
    "paymentCurrency": "EUR",
    "crewlistlink": "https://crew.nausys.com/855489551/null/",
    "createdDate": "12.11.2019",
    "approved": true,
    "paymentPlans": [
    {
        "id": 257817752,
        "date": "12.11.2019",
        "amount": "510.00",
        "amountInPaymentCurrency": "510.00",
        "paid": true
    }
],
"payments": [
{
    "id": 478751,
    "date": "03.09.2015",
    "amount": "100.00",
    "amountInPaymentCurrency": "100.00",
    "paymentCurrency": "EUR"
    }
],
"useDepositPayment": false,
"numberOfPayments": 1,
"yachtCabins": [
{
    "cabinDefinitionId": 10279571,
    "numberOfPassengers": 1,
    "discounts": [
        {
            "discountItemId": 1525416,
            "amount": 15,
            "type": "PERCENTAGE"
        }
    ],
    "additionalEquipment": [
```

```
    {
        "id": 473651,
        "quantity": "2.00",
        "listPrice": "200.00",
        "currency": "EUR",
        "priceMeasureId": 54,
        "equipmentId": 4,
        "calculationType": "SEPARATE_PAYMENT",
        "condition": {},
        "amount": "200.00"
    }
    ],
    "services": [
        {
            "id": 279940951,
            "quantity": "2.00",
            "listPrice": "0.00",
            "currency": "EUR",
            "priceMeasureId": 54,
            "serviceId": 119353,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": {},
            "amount": "0.00"
        },
        {
            "id": 279940952,
            "quantity": "2.00",
            "listPrice": "250.00",
            "currency": "EUR",
            "priceMeasureId": 54,
            "serviceId": 8219444,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": {},
            "amount": "250.00"
        }
    }
    },
    {
        "cabinDefinitionId": 10279571,
        "numberOfPassengers": 1,
        "discounts": [
            {
                "discountItemId": 1525416,
                "amount": 15,
                "type": "PERCENTAGE"
            }
        }
    }
}
```

# Create cabin charter info 

| Params | Values |
| :-- | :-- |
| Description: | With this service you can create an info reservation. In the next <br> step you can change this info reservation into option or <br> booking |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/booking/v6/creat <br> eCabinCharterInfo/ |
| Request method: | POST |
| Request structure: | RestCabinReservationInfoRequest |
| Response structure: | RestCabinReservation |

# Example 

URL:https://ws.nausys.com/CBMS-external/rest/booking/v6/createCabinCharterInfo/

## POST param:

```
{
"client": {
"name": "Rest",
    "surname": "client",
    "company": "false",
    "vatNr": "",
        "address": "address",
        "zip": "",
        "city": "",
        "countryId": "1",
        "email": "somebody@someone.some",
        "phone": "",
        "mobile": "",
        "skype": "" },
    "credentials": {
        "username": "xxx@xxxx",
        "password": "xxxxxxxxx"
    },
"periodFrom": "25.07.2019",
    "periodTo": "06.08.2019",
    "packageId": 10309002,
"agencyId": "",
"onlinePayment":"false",
"numberOfPayments" : "2",
"restCabins": [
{
"cabinDefinitionId": 10279571,
"numberOfPassengers": 1,
    "services":[10309151,10309451],
    "equipment": [10309454]
},
{
    "cabinDefinitionId": 10279571,
    "numberOfPassengers": 1,
    "services": [],
    "equipment": []
}
]
}
```

## Response:

\{
"status": "OK",
"id": 855489551,
"uuid": "3720cd44-293a-4648-92ca-4073c7100705",
"reservationStatus": "INFO",
"packageld": 10309002,
"waitingForOption": false,
"baseFromId": 102754,
"baseTold": 102754,
"locationFromId": 61,
"locationTold": 61,
"periodFrom": "25.07.2019 08:00",
"periodTo": "06.08.2019 18:00",
"client": \{
"company": false,

```
    "name": "Rest client",
    "email": "somebody@someone.some"
},
"priceListPrice": "300.00",
"agencyPrice": "255.00",
"clientPrice": "255.00",
"currency": "EUR",
"paymentCurrency": "EUR",
"localizedFinalPrice": "510.00",
"createdDate": "12.11.2019",
"approved": true,
"useDepositPayment": false,
"numberOfPayments": 0,
"yachtCabins": [
    {
        "cabinDefinitionId": 10279571,
        "numberOfPassengers": 1,
        "discounts": [
            {
                "discountItemId": 1525416,
                "amount": 15,
                "type": "PERCENTAGE"
            }
    ],
    "additionalEquipment": [
        {
            "id": 473651,
            "quantity": "2.00",
            "listPrice": "200.00",
            "currency": "EUR",
            "priceMeasureId": 54,
            "equipmentId": 4,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": {},
            "amount": "200.00"
        }
    ],
    "services": [
        {
            "id": 279940951,
            "quantity": "2.00",
            "listPrice": "0.00",
            "currency": "EUR",
            "priceMeasureId": 54,
            "serviceId": 119353,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": {},
            "amount": "0.00"
        },
        {
            "id": 279940952,
            "quantity": "2.00",
            "listPrice": "250.00",
            "currency": "EUR",
            "priceMeasureId": 54,
            "serviceId": 8219444,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": {},
            "amount": "250.00"
        }
    }
},
{
    "cabinDefinitionId": 10279571,
    "numberOfPassengers": 1,
    "discounts": [
        {
            "discountItemId": 1525416,
            "amount": 15,
            "type": "PERCENTAGE"
        }
    ]
```

# Create cabin charter option 

| Params | Values |
| :-- | :-- |
| Description: | With this service you can create an option reservation. In the <br> next step you can change this option reservation into booking |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/booking/v6/creat <br> eOption |
| Request method: | POST |
| Request structure: | RestYachtReservationOptionRequest |
| Response structure: | RestCabinReservation |

## Example:

URL:https://ws.nausys.com/CBMS-external/rest/booking/v6/createOption

## POST param:

```
{
"credentials":
{
    "username": "xxx@xxxx",
    "password": "xxxxxxxxx"
    },
    "id": 265990764,
    "uuid": "4bc44966-cdb6-42f5-aaa9-3cd1907612c4",
    "createWaitingOption": "false"
}
```

Response:

```
{
    "status": "OK",
    "id": 855489551,
    "uuid": "3720cd44-293a-4648-92ca-4073c7100705",
    "reservationStatus": "OPTION",
    "packageId": 10309002,
    "baseFromId": 102754,
    "baseToId": 102754,
    "locationFromId": 61,
    "locationToId": 61,
    "periodFrom": "25.07.2019 08:00",
    "periodTo": "06.08.2019 18:00",
    "optionTill": "13.11.2019 23:59",
    "client": {
        "company": false,
        "name": "Rest client",
        "email": "somebody@someone.some"
    },
    "priceListPrice": "300.00",
    "agencyPrice": "255.00",
    "clientPrice": "255.00",
    "currency": "EUR",
    "paymentCurrency": "EUR",
    "localizedFinalPrice": "510.00",
    "createdDate": "12.11.2019",
```

```
"approved": true,
"useDepositPayment": false,
"numberOfPayments": 0,
"yachtCabins": [
    {
        "cabinDefinitionId": 10279571,
        "numberOfPassengers": 1,
        "discounts": [
            {
                "discountItemId": 1525416,
                "amount": 15,
                "type": "PERCENTAGE"
            }
        ],
        "additionalEquipment": [
            {
                "id": 473651,
                "quantity": "2.00",
                "listPrice": "200.00",
                "currency": "EUR",
                "priceMeasureId": 54,
                "equipmentId": 4,
                "calculationType": "SEPARATE_PAYMENT",
                "condition": (),
                "amount": "200.00"
            }
        ],
        "services": [
            {
                "id": 279940951,
                "quantity": "2.00",
                "listPrice": "0.00",
                "currency": "EUR",
                "priceMeasureId": 54,
                "serviceId": 119353,
                "calculationType": "SEPARATE_PAYMENT",
                "condition": (),
                "amount": "0.00"
            },
            {
                "id": 279940952,
                "quantity": "2.00",
                "listPrice": "250.00",
                "currency": "EUR",
                "priceMeasureId": 54,
                "serviceId": 8219444,
                "calculationType": "SEPARATE_PAYMENT",
                "condition": (),
                "amount": "250.00"
            }
        ]
    },
    {
        "cabinDefinitionId": 10279571,
        "numberOfPassengers": 1,
        "discounts": [
            {
                "discountItemId": 1525416,
                "amount": 15,
                "type": "PERCENTAGE"
            }
        ]
```

<!-- Pages 111 - 120 -->

# Create info 

| Params | Values |
| :--: | :--: |
| Description: | With this service you can create an info reservation. In the next step you can change this info reservation into option or booking |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/booking/v6/creat eInfo/ |
| Request method: | POST |
| Request structure: | RestYachtReservationInfoRequest |
| Response structure: | RestYachtReservation |

## Example

URL:https://ws.nausys.com/CBMS-external/rest/booking/v6/createInfo/

## POST param:

```
{
"client": {
"name": "Rest",
    "surname": "client",
    "company": "false",
    "vatNr": "",
    "address": "address",
    "zip": "",
    "city": "",
    "countryId": "1",
    "email": "somebody@someone.some",
    "phone": "",
    "mobile": "",
    "skype": "" },
    "credentials": {
        "username": "xxx@xxxx",
        "password": "xxxxxxxxx"
    },
"periodFrom": "26.09.2015",
    "periodTo": "03.10.2015",
    "yachtID": 481848 }
```

Response:
\{
"id": 265990764,
"uuid": "4bc44966-cdb6-42f5-aaa9-3cd1907612c4",
"reservationStatus": "INFO",
"yachtId": 481848,
"periodFrom": "30.05.2015 17:00",
"periodTo": "06.06.2015 08:30",
"agency": "test agency,
"client": \{
"name": "Markus",

```
        "surname": "DAMBACHER",
        "countryId": 100158
    },
    "discounts": [
        {
            "discountItemId": 1,
            "amount": 10.00,
            "type": "PERCENTAGE"
        }
    ],
    "additionalEquipment": [
        {
            "id": 116333,
            "quantity": "1.00",
            "listPrice": "0.00",
            "priceMeasureId": 1,
            "equipmentId": 14,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": [
            }
        }
    ],
    "services": [
        {
            "id": 2315437,
            "quantity": "1.00",
            "listPrice": "160.00",
            "priceMeasureId": 54,
            "serviceld": 3,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": [
                "textDE": "enthalten: Endreinigung, Taucher Inspektion, Gas, Bettwäsche, Tücher, kroatisch Mobiltelefon (nur für den
internen Gebrauch), Basispaket für Toiletten und Küche",
                    "textEN": "includes: Final cleaning, divers inspection, gas, bedding, cloths, croatian mobile phone (for internal usage
only), basic package for toilets and kitchen",
                    "textHR": "uključuje: završno čišćenje, podvodnu inspekciju, plin, plahte, kuh.krpe, hrv.mobilni telefon (samo za
internu uporabu), osnovni paket za toalet i kuhinju"
        }
        },
        {
            "id": 2315438,
            "quantity": "1.00",
            "listPrice": "0.00",
            "priceMeasureId": 54,
            "serviceld": 477980,
            "calculationType": "ADVANCE_PAYMENT",
            "condition": [
                "textDE": "GRATIS",
                    "textEN": "GRATIS",
                    "textHR": "GRATIS"
        }
        }
    ],
    "priceListPrice": "3340.00",
    "agencyPrice": "2606.97",
    "clientPrice": "3006.00",
    "paymentCurrency": "EUR",
    "approved": true,
    "numberOfPayments" : "2",
    "useDepositPayment" : "false"
}
```

# Create option 

| Params | Values |
| :-- | :-- |
| Description: | With this service you can create an option reservation. In the <br> next step you can change this option reservation into booking |
| Consumes: | JSON (content type: application/json) |

| Produces: | JSON (content type: application/json) |
| :-- | :-- |
| URL: | https://ws.nausys.com/CBMS-external/rest/booking/v6/creat <br> eOption |
| Request method: | POST |
| Request structure: | RestYachtReservationOptionRequest |
| Response structure: | RestYachtReservation |

# Example: 

URL:https://ws.nausys.com/CBMS-external/rest/booking/v6/createOption

## POST param:

```
{
"credentials":
{
    "username": "xxx@xxxx",
    "password": "xxxxxxxxx"
    },
    "id": 265990764,
    "uuid": "4bc44966-cdb6-42f5-aaa9-3cd1907612c4",
    "createWaitingOption": "false"
}
```

Response:

```
{
    "id": 265990764,
    "uuid": "4bc44966-cdb6-42f5-aaa9-3cd1907612c4",
    "reservationStatus": "OPTION",
    "yachtId": 481848,
"optionTill": "10.05.2015 23:59",
    "periodFrom": "30.05.2015 17:00",
    "periodTo": "06.06.2015 08:30",
    "agency": "test agency",
    "client": {
        "name": "Markus",
        "surname": "DAMBACHER",
        "countryId": 100158
    },
    "discounts": [
        {
            "discountItemId": 1,
            "amount": 10.00,
            "type": "PERCENTAGE"
        }
    ],
    "additionalEquipment": [
        {
            "id": 116333,
            "quantity": "1.00",
            "listPrice": "0.00",
            "priceMeasureId": 1,
            "equipmentId": 14,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": {
        }
    }
    ],
    "services": [
        {
            "id": 2315437,
            "quantity": "1.00",
            "listPrice": "160.00",
            "priceMeasureId": 54,
            "serviceId": 3,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": {
                    "textDE": "enthalten: Endreinigung, Taucher Inspektion, Gas, Bettwäsche, Tücher,
kroatisch Mobiltelefon (nur für den internen Gebrauch), Basispaket für Toiletten und Küche",
                                    "textEN": "includes: Final cleaning, divers inspection, gas, bedding, cloths,
croatian mobile phone (for internal usage only), basic package for toilets and kitchen",
                                    "textHR": "ukljuuje: završno išenje, podvodnu inspekciju, plin, plahte, kuh.krpe,
hrv.mobilni telefon (samo za internu uporabu), osnovni paket za toalet i kuhinju"
        }
        },
        {
            "id": 2315438,
            "quantity": "1.00",
            "listPrice": "0.00",
            "priceMeasureId": 54,
            "serviceId": 477980,
            "calculationType": "ADVANCE_PAYMENT",
            "condition": {
                "textDE": "GRATIS",
                    "textEN": "GRATIS",
                    "textHR": "GRATIS"
        }
        }
    ],
    "priceListPrice": "3340.00",
    "agencyPrice": "2606.97",
    "clientPrice": "3006.00",
    "paymentCurrency": "EUR",
    "approved": true
    }
```

# Online payment 

| Params | Values |
| :-- | :-- |
| Description: | With this service you can make payment. |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/booking/v6/onlin <br> ePayment |
| Request method: | POST |
| Request structure: | RestYachtReservationOnlinePaymentRequest |
| Response structure: | RestYachtReservationOnlinePaymentResponse |

## Example:

URL:https://ws.nausys.com/CBMS-external/rest/booking/v6/onlinePayment

## POST param:

\{
"credentials": \{
"username": "xxx@xxxx",
"password": "xxxxxxxxx" \},
"id": 1961723,
"uuid": "6d1bc4d4-5fd8-44b8-a4d3-d4e7b0225955"
"language": "CROATIAN",
"rejectedUrl": "https://www.companysite.com/error",
"successUrl": "https://www.companysite.com/success"
\}

## Response:

\{
status: "OK",
url: "https://payment.nausys.com/NauSYS-payment/payment/v1/public/paymentForm/123-123456789"
\}

## Online payment plan

| Params | Values |
| :-- | :-- |
| Description: | Creates payment plan |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/booking/v6/onlin <br> ePaymentPlan |
| Request method: | POST |
| Request structure: | RestOnlinePaymentPlan |
| Response structure: | RestResponse |

## Example:

URL:https://ws.nausys.com/CBMS-external/rest/booking/v6/onlinePaymentPlan

## POST param:

```
{
    "credentials": {
        "username": "xxx@xxxxx",
        "password": "xxxxxxxxxx"
    },
    "id": 4125752,
    "uuid": "0628d3b6-52fa-4d68-8640-1126c204aed4",
    "paymentPlanId":2361351,
    "amount": "100.00",
    "currency": "EUR",
    "date": "23.10.2015",
    "approvalCode":0
}
```

Response:
\{
status:"OK",
url: "https://payment.nausys.com/NauSYS-payment/payment/v1/public/paymentForm/123-123456789"
\}

# Storno option 

| Params | Values |
| :-- | :-- |
| Description: | With this service you can cancel option OR waiting option |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/booking/v6/storn <br> oOption |
| Request method: | POST |
| Request structure: | RestYachtReservationRequest |
| Response structure: | RestYachtReservation |

## Example

URL:https://ws.nausys.com/CBMS-external/rest/booking/v6/stornoOption

## POST param:

\{
"credentials": \{
"username": "xxx@xxxx",
"password": "xxxxxxxxxx"
\},
"id": 1,
"uuid": "xxxxxxxada13as"
\}

## Response:

\{
"id": 1961444,
"uuid": "6d1bc4d4-5fd8-44b8-a4d3-d4e7b0225955",
"reservationStatus": "STORNO",
"yachtId": 829222,
"periodFrom": "30.05.2015 17:00",
"periodTo": "06.06.2015 08:30",
"agency": "test agency",
"client": \{
"name": "Markus",
"surname": "DAMBACHER",
"countryId": 100158

```
},
"discounts": [
    {
        "discountItemId": 1,
        "amount": 10.00,
        "type": "PERCENTAGE"
    }
],
"additionalEquipment": [
    {
        "id": 116333,
        "quantity": "1.00",
        "listPrice": "0.00",
        "priceMeasureId": 1,
        "equipmentId": 14,
        "calculationType": "SEPARATE_PAYMENT",
        "condition": {
        }
    }
],
"services": [
    {
        "id": 2315437,
        "quantity": "1.00",
        "listPrice": "160.00",
        "priceMeasureId": 54,
        "serviceId": 3,
        "calculationType": "SEPARATE_PAYMENT",
        "condition": {
            "textDE": "enthalten: Endreinigung, Taucher Inspektion, Gas, Bettwäsche, Tücher, kroatisch Mobiltelefon (nur für den
internen Gebrauch), Basispaket für Toiletten und Küche",
                    "textEN": "includes: Final cleaning, divers inspection, gas, bedding, cloths, croatian mobile phone (for internal usage
only), basic package for toilets and kitchen",
                    "textHR": "uključuje: završno čišćenje, podvodnu inspekciju, plin, plahte, kuh.krpe, hrv.mobilni telefon (samo za
internu uporabu), osnovni paket za toalet i kuhinju"
        }
    },
    {
        "id": 2315438,
        "quantity": "1.00",
        "listPrice": "0.00",
        "priceMeasureId": 54,
        "serviceId": 477980,
        "calculationType": "ADVANCE_PAYMENT",
        "condition": {
            "textDE": "GRATIS",
            "textEN": "GRATIS",
            "textHR": "GRATIS"
        }
    }
],
"priceListPrice": "3340.00",
"agencyPrice": "2606.97",
"clientPrice": "3006.00",
"paymentCurrency": "EUR",
"approved": true
}
```

# Crew list 

## ENUM constraints

Get countries for Nationality, Birth country and Residence country:
https://ws.nausys.com/CBMS-external/rest/crewlist/countries

Get identification document types:
https://ws.nausys.com/CBMS-external/rest/crewlist/documents

# Get 

| Params | Values |
| :-- | :-- |
| Description: | Provides specified crew list |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/crewlist/v6/get/\{r <br> eservationld\}/\{securityCode\} |
| Request method: | GET |
| Response structure: | RestCrewList |

## Example

URL: https://ws.nausys.com/CBMS-external/rest/crewlist/v6/get/898654497/6d1bc4d4-5fd8-44b8-a4d3-d4e7b0225955

## Response:

```
("status": "OK",
    "reservationId": 3618721,
    "yachtName": "Jeanneau 53 - 5 cab. - Test-Boat - 2011.",
    "companyName": "Test Yachtcharter",
    "baseFrom": "G0cek",
    "baseTo": "G0cek",
    "periodFrom": "22.08.2015",
    "periodTo": "05.09.2015",
    "maxPassengers": 10,
    "insertSkipper": true,
    "passengers": [
        {
            "skipper": false,
            "name": "TEST",
            "surname": "CLIENT",
            "birthDate": "18.02.1995",
            "birthPlace": "SALZBURG",
            "birthCountry": "AUT",
            "nationality": "AUT",
            "documentType": "PASSPORT",
            "documentNumber": "P3423147"
        },
        {
            "skipper": false,
            "name": "TEST2",
            "surname": "CLIENT2",
            "birthDate": "19.03.1998",
            "birthPlace": "VIENNA",
            "birthCountry": "AUT",
            "nationality": "AUT",
            "documentType": "PASSPORT",
            "documentNumber": "P3445947"
        },
```

```
    {
        "skipper": false,
        "name": "TEST3",
        "surname": "CLIENT3",
        "birthDate": "23.08.1991",
        "birthPlace": "SALZBURG",
        "birthCountry": "AUT",
        "nationality": "AUT",
        "documentType": "PASSPORT",
        "documentNumber": "P4633147"
    },
    {
        "skipper": false,
        "name": "TEST4",
        "surname": "CLIENT4",
        "birthDate": "15.10.1993",
        "birthPlace": "SALZBURG",
        "birthCountry": "AUT",
        "nationality": "AUT",
        "documentType": "PASSPORT",
        "documentNumber": "P3423147"
    },
    ],
    "flightNumber": "XQ 0797",
    "airportToBaseTransfer": true,
    "arrivalTime": "23.08.2015 14:20",
    "crewListNote": ""
}
```

# Set 

| Params | Values |
| :-- | :-- |
| Description: | With this service you can create a crew list. |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/crewlist/v6/set/\{r <br> eservationld\}/\{securityCode\} |
| Request method: | POST |
| Request structure: | RestCrewList |
| Response structure: | RestResponse |

## Example

URL:https://ws.nausys.com/CBMS-external/rest/crewlist/v6/set/3618721/9a4c52e559c7c9afc67350af9c64ce4d
POST param:

```
{
    "passengers": [
        {
            "skipper":false,
            "name":"Test",
            "surname":"Client",
            "birthDate":"18.02.1964",
            "birthPlace":"SALZBURG",
            "birthCountry":"AUT",
            "nationality":"AUT",
            "documentType":"PASSPORT",
            "documentNumber":"P1234147",
            "gender":"FEMALE",
            "livingPlace":"Graz",
            "livingCountry":"AUT"
        },
        {
            "skipper":true,
            "skipperLicence":"S-005613",
            "vhfLicence":"",
            "skipperEmail":"test@example.com",
            "skipperMobile":"+1234567890123",
            "name":"Test",
            "surname":"Client1",
            "birthDate":"08.07.1972",
            "birthPlace":"LINZ",
            "birthCountry":"AUT",
            "nationality":"AUT",
            "documentType":"PASSPORT",
            "documentNumber":"P1232388",
            "gender":"MALE",
            "livingPlace":"Graz",
            "livingCountry":"AUT"
        }
    ],
    "crewListNote":""
}
```

Response:
\{
"status":"OK"
\}

# Invoices 

## Get Invoices

| Params | Values |
| :-- | :-- |
| Description: | Export of invoices for defined time period |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |

<!-- Pages 121 - 130 -->

| URL App test: <br> URL App production: | https://ws-test.nausys.com/CBMS-external/rest/sales/v6/inv oices/ <br> https://ws.nausys.com/CBMS-external/rest/sales/v6/invoices/ |
| :--: | :--: |
| URL Agency test: |  |
| URL Agency production: | https://ws-test.nausys.com/CBMS-external/rest/sales/v6/inv oices/agency/ https://ws.nausys.com/CBMS-external/rest/sales/v6/invoices /agency/ |
| URL Owner test: |  |
| URL Owner production: | https://ws-test.nausys.comCBMS-external/rest/sales/v6/invoi ces/owner/ https://ws.nausys.com/CBMS-external/rest/sales/v6/invoices /owner/ |
| Request method: | POST |
| Request structure: | RestInvoicesRequest |
| Response structure: | RestInvoicesExport |

# Example 

https://ws-test.nausys.com/CBMS-external/rest/sales/v6/invoices/

## POST param:

\{
"credentials" : \{"username":"\$\{USERNAME\}","password":"\$\{PASSWORD\}",
"periodFrom":"01.01.2024",
"periodTo":"17.01.2024"
\}
POST param:
\{
"invoices": [
\{
"alreadytransferred": false,
"altcurrency": "EUR",
"basefrom": "101161",
"baseto": "101161",
"client": "Martine Hüabl",
"client2": \{
"address": "Walpersbach 3055",
"city": "Walpersbach",
"company": true,
"countryld": 100102,
"externalid": "375866",
"id": 3723161,
"name": "Martine",
"surname": "Hüabl",
"zip": "2822"
\},
"clientaddress": "Walpersbach 3055",
"clientcity": "Walpersbach",
"clientcountry": "Austrija",
"clientid": "3723161",
"clientzipcode": "2822",
"date": "2023-07-15",
"guestname": "Martine Hüabl",
"issuedto": "1",
"items": \{
"items": [
\{
"agencydiscountrate": "0.00",
"altcurrency": "EUR",

```
    "currency": "EUR",
    "currencyrate": "1.000000",
    "discounts": {
        "discounts": [
        {
            "altamount": "829.65",
            "amount": "15.00",
            "level": "1",
            "name": "Rani buking",
            "type": "PERCENTAGE"
        },
        {
            "altamount": "235.07",
            "amount": "5.00",
            "level": "2",
            "name": "Yachtclub popust",
            "type": "PERCENTAGE"
        }
    }
    },
    "id": "968578",
    "ident": "BOOK",
    "identname": "Smještaj na plovilu",
    "quantity": "1.00",
    "singlepricewithouttax": "4466.25",
    "totalaltdiscount": "1064.72",
    "totalaltpricewithouttax": "4466.25",
    "totalaltpricewithtax": "5046.86",
    "totalalttax": "580.61",
    "totalpricewithouttax": "5530.970000",
    "vatrate": "13.00"
    }
    }
},
"modifyTime": "14.07.2023 08:31:27",
"number": "1054-2-2",
"partner": "Pitter Gesellschaft m.b.H.",
"partner2": {
    "address": "Raimund-Obendrauf-Straße 30 ",
    "city": "Hartberg",
    "company": true,
    "countryId": 100102,
    "email": "inhehe@example.com",
    "id": 468271,
    "name": "Pitter Gesellschaft m.b.H.",
    "phone": "+43 3332 66240
Skype: ycpitterinfo",
    "skype": "susanne_example",
    "vatNr": "ATU 58435455",
    "zip": "A-8223"
},
"partneraddress": "Raimumd-Otenrauf-Strafe 30 ",
"partnercity": "Hartberg",
"partnercountry": "Austrija",
"partnerid": "468271",
"partnervatcode": "ATU 58461355",
"partnerzipcode": "A-8230",
"paymentMethod": "T",
"reservationnumber": "89807657",
"resource": "Relax",
"resourcecode": "1051506",
"resourcetype": "Nautitech 40 Open - 4 + 2 cab.",
"totalaltprice": "5046.86",
"totalaltpricewithouttax": "4466.25",
"totalalttax": "580.61",
"type": "1",
"vat": {
    "items": [
    {
        "basealt": "4466.25",
        "rate": "13.00",
        "totalalt": "580.61"
    }
```

```
        }
    ],
    "version": "6"
    }
    ],
    "summary": {
    "apiCount": 0,
    "fiCount": 1,
    "sapiCount": 0,
    "sfiCount": 0,
    "totalCount": 1
    }
}
```

# Contacts 

## Create contact

| Params | Values |
| :-- | :-- |
| Description: | With this service you can create a contact |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/client/v6/contact/ <br> create/ |
| Request method: | POST |
| Request structure: | RestClient2 |
| Response structure: | RestClient2 |

## Example

URL:https://ws.nausys.com/CBMS-external/rest/client/v6/contact/create/

## POST param:

```
{
    "credentials": {
    "username":"rest@xxxxxx",
"password":"xxxxxxxxxxx"
    },
    "address": "Lukavec",
    "agencyCodeID": "123456",
    "birthday": "02.11.1993",
    "city": "Velika Gorica",
    "countryId": 100181,
    "disabled": false,
    "email": "test@test.com",
    "fax": "+4678676",
    "mobile": "+123456486",
    "name": "Test contact",
    "note": "123 note 123",
    "phone": "+5867866",
    "skype": "lukaskype",
    "vatNr": "123456789",
    "zipCode": "48600"
}
```

# Response: 

```
{
    "address": "Lukavec",
    "agencyCodeID": "123456",
    "birthday": "02.11.1993",
    "city": "Velika Gorica",
    "countryld": 100181,
    "disabled": false,
    "email": "test@test.com",
    "fax": "+4678676",
    "id": 2554451,
    "mobile": "+123456486",
    "name": "Test contact",
    "note": "123 note 123",
    "phone": "+5867866",
    "skype": "lukaskype",
    "vatNr": "123456789",
    "zipCode": "48600"
}
```

## Get all contacts

| Params | Values |
| :-- | :-- |
| Description: | With this service you can fetch a contact |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/client/v6/contact/ <br> all |
| Request method: | POST |
| Request structure: | RestAuthentication |
| Response structure: | RestClientList |
| Note: | It is possible to add URL parameter "date" (format: <br> dd-MM-yyyy) to filter contacts modified after specific date <br> http://ws.nausys.com/CBMS-external/rest/client/v6/contact/ <br> all?date=01-12-2021 |

## Example

URL:https://ws.nausys.com/CBMS-external/rest/client/v6/contact/all

## POST param:

```
{
    "username":"rest@xxxxxx",
"password":"xxxxxxxxxxx"
},
```

Response:

```
{
    "clients": [
    {
        "address": "address",
        "birthday": "28.12.2021",
        "city": "",
        "company": false,
        "countryld": 1,
        "disabled": false,
```

"email": "marko.pezo@nausys.com", "id": 2658551, "mobile": "", "name": "Rest", "phone": "", "skype": "", "surname": "client", "vatNr": "", "zipCode": "" }, { "birthday": "28.12.2021", "company": false, "disabled": false, "email": "test@test.com", "id": 2127991, "name": "Saint", "surname": "Nicholas" } }

# Get all contacts 2

|  Params | Values  |
| --- | --- |
|  Description: | With this service you can fetch contacts  |
|  Consumes: | JSON (content type: application/json)  |
|  Produces: | JSON (content type: application/json)  |
|  URL: | https://ws.nausys.com/CBMS-external/rest/client/v6/contact/  |
|  Request method: |   |
|  Request structure: | REST  |
|  Response structure: | RestGetContactsRequest  |

Note: Check RestGetContactsRequest structure for required and optional fields.

Example: URL: https://ws.nausys.com/CBMS-external/rest/client/v6/contact/all2

POST param: { "credentials":{ "username": "username", "password": "password" }, "ids":[1,2,3], "modifyTimeFrom": "31.01.2021 00:00", "modifyTimeTo": "31.12.2021 14:00", "email": "example@example.com", "contactRoleIds": [101,102,103] }

Response:

```
{
    "clients": [
    {
        "address": "address",
        "birthday": "28.12.2021",
        "city": "",
        "company": false,
        "countryId": 1,
        "disabled": false,
        "email": "marko.pezo@nausys.com",
        "id": 2658551,
        "mobile": "",
        "name": "Rest",
        "phone": "",
        "skype": "",
        "surname": "client",
        "vatNr": "",
        "zipCode": ""
    },
    {
        "birthday": "28.12.2021",
        "company": false,
        "disabled": false,
        "email": "test@test.com",
        "id": 2127991,
        "name": "Saint",
        "surname": "Nicholas"
    }
]
}
```

# Get contact 

| Params | Values |
| :-- | :-- |
| Description: | With this service you can fetch a contact |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/client/v6/contact/ <br> get/[id] |
| Request method: | POST |
| Request structure: | RestAuthentication |
| Response structure: | RestClient2 |

## Example

URL:https://ws.nausys.com/CBMS-external/rest/client/v6/contact/get/2554501

## POST param:

```
{
    "username":"rest@xxxxxx",
"password":"xxxxxxxxxxx"
},
```

## Response:

```
{
    "address": "marmaris cad",
    "agencyCodeID": "123456",
    "birthday": "02.11.1993",
    "city": "muğla",
```

"company": true, "countryld": 100181, "disabled": false, "email": "test@test.com", "fax": "+4678676", "id": 2554501, "mobile": "+123456486", "name": "Test contact", "note": "123 note 123", "phone": "+5867866", "skype": "lukaskype", "vatNr": "123456789", "zipCode": "48600" }

# Get crew member

|  Params | Values  |
| --- | --- |
|  Description: | Fetch details about a crew member  |
|  Consumes: | JSON (content type: application/json)  |
|  Produces: | JSON (content type: application/json)  |
|  URL: | https://ws.nausys.com/CBMS-external/rest/client/v6/crewMe
mber/[crewMemberld]  |
|  Request method: | POST  |
|  Request structure: | RestAuthentication  |
|  Response structure: | RestYachtCrewMember  |

## Example

## 'status": "OK", "crewRole": "Captain", "id": 301, "name": "Name", "summary": "Nationality: Greek
Year Born: 1974
", "surname": "Surname", "photoUrl": "", "languages": [", "", ""], "livingPlace": "" $\}$

## Merge contact

|  Params | Values  |
| --- | --- |
|  Description: | With this service you can merge two contacts  |
|  Consumes: | JSON (content type: application/json)  |
|  Produces: | JSON (content type: application/json)  |

| URL: | https://ws.nausys.com/CBMS-external/rest/client/v6/contact/ merge/ |
| :-- | :-- |
| Request method: | POST |
| Request structure: | RestMergeClientRequest |
| Response structure: | RestClient2 |

# Example 

URL:https://ws.nausys.com/CBMS-external/rest/client/v6/contact/merge/

## POST param:

```
{
    "credentials": {
    "username":"rest@xxxxx",
"password":"xxxxxxxxxx"
    },
    "sourceId": 1912634,
    "targetId": 1911907,
}
```

Response:

```
{
    "contactRoleIds":[10292679]
    "disabled":false,
    "externalId":"C130310",
    "id":1911907,
    "preferredLanguage":"ENGLISH",
    "surname":"YW - Jorge Garate"
}
```

## Update contact

| Params | Values |
| :-- | :-- |
| Description: | With this service you can update a contact |
| Consumes: | JSON (content type: application/json) |
| Produces: | JSON (content type: application/json) |
| URL: | https://ws.nausys.com/CBMS-external/rest/client/v6/contact/ <br> update/[contactID] |
| Request method: | POST |
| Request structure: | RestClient2 |
| Response structure: | RestClient2 |

## Example

URL:https://ws.nausys.com/CBMS-external/rest/client/v6/contact/update/2554451
POST param:

```
{
    "credentials": {
    "username":"rest@xxxxx",
"password":"xxxxxxxxxx"
    },
    "address": "Lukavec",
    "agencyCodeID": "123456",
    "birthday": "02.11.1993",
    "city": "Velika Gorica",
    "countryId": 100181,
    "disabled": false,
    "email": "test@test.com",
    "fax": "+4678676",
    "id": 2554451,
    "mobile": "+123456486",
    "name": "Test contact",
    "note": "123 note 123",
    "phone": "+5867866",
    "skype": "lukaskype",
    "vatNr": "123456789",
    "zipCode": "48600"
}
```

# Response: 

\{
"address": "Lukavec",
"agencyCodeID": "123456",
"birthday": "02.11.1993",
"city": "Velika Gorica",
"countryId": 100181,
"disabled": false,
"email": "test@test.com",
"fax": "+4678676",
"id": 90201,
"mobile": "+123456486",
"name": "Test contact",
"note": "123 note 123",
"phone": "+5867866",
"skype": "lukaskype",
"vatNr": "123456789",
"zipCode": "48600"
\}

## Data structures

## AllYachtsRequest

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| username | String | username for web service |
| password | String | password for web service |
| onlyIDs | Boolean | Export only yacht IDs, without other <br> data. It exports new field yachtIDs from <br> RestYachtList |
| yachtIDs | Array of Long | Export data only for these yacht IDs, <br> otherwise it will export data for all yacht <br> in the fleet |

# Example 

```
{
    "username":"XXXXXX@XXX",
    "password":"XXXXXXXXXXX",
"onlyIDs":true,
"yachtIDs":[103152,103151]
}
```

## Data Types

| Name | Pattern | Note |
| :-- | :-- | :-- |
| Date | dd.MM.yyyy | Date without time |
| DateTime1 | dd.MM.yyyy HH:mm | Date with time without seconds |
| DateTime2 | dd.MM.yyyy HH:mm:ss | Date with time with seconds |
| Time1 | HH:mm | Time without seconds |
| Time2 | HH:mm:ss | Time with seconds |
| Number | \#\#\#0 | Integer or Long |
| Decimal | \#\#\#0.00 | Decimal number |

## Discount

## Definition

| Field | Type | Description | Possible values |
| :-- | :-- | :-- | :-- |
| level | String | discount level | 1 - owners discount |
|  |  |  | 2 - discount from charter <br> company |
| name | String | name of discount |  |
| type | String | discount type | PERCENTAGE - discount in per <br> centages \% |
|  |  |  | AMOUNT - absolute discount <br> amount in invoicing currency |
| amount | String | amount of discount | amount of discount in <br> invoicing currency |
| altamount | String | total discount amount | amount of discount in home <br> currency (altcurrency) |

## Example

<discount level="1" name="Rani boking" type="PERCENTAGE" amount="10.00" altamount="2534.55"/>

## InvoicesRequest

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |

<!-- Pages 131 - 140 -->

| credentials | Authentication |  |
| :-- | :-- | :-- |
| periodFrom | String |  |
| periodTo | String |  |

# Example 

```
{
"credentials" : {"username":"XXXXX@XXX","password":"xxxxxx"},
    "periodFrom" : "01.01.2013",
    "periodTo" : "31.01.2013"
}
```

## Period

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| periodFrom | Date |  |
| periodTo | Date |  |

## Example

```
{
    "periodFrom":"23.05.2015",
    "periodTo":"30.05.2015"
}
```

## RestAdditionalDiscountltem

Available only for charter companies

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long | discount item id (to see list of all <br> discounts call All discount items) |
| amount | String | discount item amount |
| type | String | possible values: "PERCENTAGE" or <br> "AMOUNT" |

## Example

```
{
"id": 11718712,
    "amount": "12",
    "type": "PERCENTAGE"
}
```

## RestAuthentication

# Definition 

| Field | Type | Description |
| :-- | :-- | :-- |
| username | String | username for web service |
| password | String | password for web service |

## Example

```
{
    "username":"XXXXXX8XXX",
    "password":"XXXXXXXXXXX"
}
```

## RestBankAccount

|  | String |  |
| :-- | :-- | :-- |
| bankName | String | the bank name |
| bankAddress | String | the bank address |
| accountNumber | String | account number |
| swift | String | swift |
| iban | String | iban |
| sepa | String | sepa |

## \{ <br> "bankName": "EXAMPLE BANK D.D.", <br> "bankAddress": "-", <br> "accountNumber": "1111111-1111111111", <br> "swift": "SWIFT111", <br> "iban": "HR11 11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111

```
    {
    "periodFrom": "01.08.2019",
    "periodTo": "08.08.2019",
    "cabinOccupancy": [
        {
            "cabinDefinitionId": 10279571,
            "availableNumberOfCabins": 2,
            "maximumNumberOfCabins": 2,
            "numberOfOptions": 0
        },
        {
            "cabinDefinitionId": 10174571,
            "availableNumberOfCabins": 1,
            "maximumNumberOfCabins": 1,
            "numberOfOptions": 0
        }
    ]
    },
    {
        "periodFrom": "08.08.2019",
        "periodTo": "15.08.2019",
        "cabinOccupancy": [
        {
            "cabinDefinitionId": 10279571,
            "availableNumberOfCabins": 2,
            "maximumNumberOfCabins": 2,
            "numberOfOptions": 0
        },
        {
            "cabinDefinitionId": 10174571,
            "availableNumberOfCabins": 1,
            "maximumNumberOfCabins": 1,
            "numberOfOptions": 0
        }
    ]
    }
    ]
}
```

# RestCabinCharterOccupancyPeriod

# Definition 

| Field | Type | Description |
| :-- | :-- | :-- |
| periodFrom | Date |  |
| periodTo | Date |  |
| cabinOccupancy | Array of RestCabinOccupancy |  |

## Example

```
{
    "periodFrom": "01.08.2019",
    "periodTo": "08.08.2019",
    "cabinOccupancy": [
        {
            "cabinDefinitionId": 10279571,
            "availableNumberOfCabins": 2,
            "maximumNumberOfCabins": 2,
            "numberOfOptions": 0
        },
        {
            "cabinDefinitionId": 10174571,
            "availableNumberOfCabins": 1,
            "maximumNumberOfCabins": 1,
            "numberOfOptions": 0
        }
    ]
}
```

## RestCabinCharterYacht

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long |  |
| name | String |  |
| companyld | Long |  |
| baseld | Long |  |
| locationld | Long | locationld of base |
| yachtModelld | Long |  |
| draft | Decimal |  |
| cabins | Number |  |
| cabinsCrew | Number |  |

| berthsCabin | Number |  |
| :--: | :--: | :--: |
| berthsSalon | Number |  |
| berthsCrew | Number |  |
| berthsTotal | Number |  |
| maxPersons | Number |  |
| wc | Number |  |
| wcCrew | Number |  |
| buildYear | Number |  |
| renewed | Number |  |
| launchedYear | Number |  |
| engines | Number |  |
| enginePower | Decimal |  |
| steeringTypeld | Long |  |
| sailTypeld | Long |  |
| sailRenewed | Number |  |
| genoaTypeld | Long |  |
| genoaRenewed | Number |  |
| standardYachtEquipment | Array of RestYachtEquipment |  |
| euminia | RestEuminia | if ship is not evaluated in Euminia rating system, response do not contain this structure |
| mainPictureUrl | String |  |
| picturesURL | Array of String |  |
| flagsid | Array of Long | Contains ids of RestCountry. |
| charterType | String | Indicates whether charter type is BAREBOAT or CREWED |
| fuelTank | Number |  |
| waterTank | Number |  |
| mastLength | Decimal |  |
| propulsionType | String | SAILDRIVE, SHAFT, ZDRIVE, IPS, OUTBOARD, SURFACE, JET |
| oneWayPeriods | Array of RestOneWayPeriod |  |
| yachtCabin | Array of RestCabinPackageYachtCabin |  |

# Example 

\{
"id": 479292,
"name": "Whispper",
"companyld": 102701,
"baseId": 102753,
"locationId": 51,
"yachtModelld": 263,
"draft": 1.8,
"cabins": 2,
"cabinsCrew": 0,

```
"berthsCabin": 4,
"berthsSalon": 0,
"berthsCrew": 2,
"berthsTotal": 6,
"wc": 1,
"wcCrew": 0,
"buildYear": 2004,
"stearingTypeld": 2,
"steeringTypeld": 2,
"sailTypeld": 1,
"genoaTypeld": 1,
"standardYachtEquipment": [
    {
        "id": 54325,
        "quantity": 1,
        "equipmentId": 24,
        "comment": {},
        "highlight": false
    },
    {
        "id": 54329,
        "quantity": 1,
        "equipmentId": 18,
        "comment": {},
        "highlight": false
    },
    {
        "id": 54320,
        "quantity": 1,
        "equipmentId": 7,
        "comment": {},
        "highlight": false
    },
    {
        "id": 54328,
        "quantity": 1,
        "equipmentId": 100820,
        "comment": {},
        "highlight": false
    },
    {
        "id": 54323,
        "quantity": 1,
        "equipmentId": 13,
        "comment": {},
        "highlight": false
    },
    {
        "id": 54319,
        "quantity": 1,
        "equipmentId": 15,
        "comment": {},
        "highlight": false
    },
    {
        "id": 54322,
        "quantity": 1,
        "equipmentId": 100499,
        "comment": {},
        "highlight": false
    },
    {
        "id": 54330,
        "quantity": 1,
        "equipmentId": 100619,
        "comment": {},
        "highlight": false
    },
    {
        "id": 54324,
        "quantity": 1,
        "equipmentId": 6,
```

```
    "comment": {},
    "highlight": false
},
{
    "id": 54327,
    "quantity": 1,
    "equipmentId": 116653,
    "comment": {},
    "highlight": false
},
{
    "id": 54326,
    "quantity": 1,
    "equipmentId": 100491,
    "comment": {},
    "highlight": false
},
{
    "id": 54318,
    "quantity": 1,
    "equipmentId": 17,
    "comment": {},
    "highlight": false
},
{
    "id": 54321,
    "quantity": 1,
    "equipmentId": 100498,
    "comment": {},
    "highlight": false
}
],
"mainPictureUrl": "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/main.jpg",
"picturesURL": [
"http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/main.jpg",
"http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/layout.jpg",
"http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/slika (3).jpg",
"http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/slika (4).jpg",
"http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/slika (5).jpg"
],
"pictures": [
{
    "src": "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/main.jpg",
    "catalogPhoto": true,
    "mainPicture": true,
    "layoutPicture": false
},
{
    "src": "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/layout.jpg",
    "catalogPhoto": true,
    "mainPicture": false,
    "layoutPicture": true
},
{
    "src": "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/slika (3).jpg",
    "catalogPhoto": true,
    "mainPicture": false,
    "layoutPicture": false
},
{
    "src": "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/slika (4).jpg",
    "catalogPhoto": true,
    "mainPicture": false,
    "layoutPicture": false
},
{
    "src": "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/slika (5).jpg",
    "catalogPhoto": true,
    "mainPicture": false,
    "layoutPicture": false
}
],
```

```
    "fuelTank": 0,
    "waterTank": 0,
    "mastLength": 21.5,
    "yachtCabin": [
        {
            "cabinDefinitionId": 10279571,
            "quantity": 2
        },
        {
            "cabinDefinitionId": 10174571,
            "quantity": 1
        }
    ]
}
```

# RestCabinCharterYachtSeason 

| Field | Type | Description |
| :-- | :-- | :-- |
| seasonId | Long |  |
| cabinPriceLists | Array of RestCabinPriceList |  |
| additionalYachtEquipment | Array of RestYachtAdditionalEquipmentP <br> rice |  |
| services | Array of RestYachtServicePrice |  |

## Example

"seasonCabinCharterSpecificData": [
\{
"seasonId": 7755128,
"cabinPriceLists": [
\{
"columns": [
\{
"periods": [
\{
"periodFrom": "01.01.2019",
"periodTo": "31.03.2019"
\},
\{
"periodFrom": "01.04.2019",
"periodTo": "30.06.2019"
\}
]
\},
\{
"periods": [
\{

```
        "periodFrom": "01.10.2019",
        "periodTo": "31.12.2019"
        }
        ]
    ],
    {
    "periods": [
        {
        "periodFrom": "01.07.2019",
        "periodTo": "30.09.2019"
        }
        ]
    }
    ],
    "rows": [
    {
    "cabinDefinitionId": 10279571,
    "prices": [
        {
        "price1": "180.00000",
        "price2": "120.00000"
    },
    {
        "price1": "185.00000",
        "price2": "125.00000"
    ],
    {
        "price1": "200.00000",
        "price2": "150.00000"
    }
    ]
    },
    {
    "cabinDefinitionId": 10279572,
    "prices": [
        {
        "price1": "400.00000",
        "price2": "320.00000",
        "price3": "250.00000"
    },
    {
```

```
        "price1": "410.00000",
        "price2": "330.00000",
        "price3": "280.00000"
    ],
    {
        "price1": "450.00000",
        "price2": "350.00000",
        "price3": "300.00000"
    }
    ]
    },
    {
    "cabinDefinitionId": 10174571,
    "prices": [
        {
            "price1": "200.00000",
            "price2": "150.00000"
        },
        {
            "price1": "220.00000",
            "price2": "180.00000"
        },
        {
            "price1": "280.00000",
            "price2": "200.00000"
        }
        ]
    }
    ],
    "currency": "EUR"
    }
    ],
    "additionalYachtEquipment": [
    {
        "id": 10309301,
        "price": "500.00",
        "currency": "EUR",
        "equipmentId": 113410,
        "priceMeasureId": 54,
        "calculationType": "SEPARATE_PAYMENT",
```

<!-- Pages 141 - 150 -->

```
        "condition": {},
        "amount": "500.00"
    }
    ],
    "services": [
        {
        "id": 10309151,
        "serviceId": 119353,
        "price": "0.00",
        "currency": "EUR",
        "priceMeasureId": 54,
        "calculationType": "SEPARATE_PAYMENT",
        "description": {},
        "obligatory": false,
        "amount": "0.00"
    }
    ]
    },
    {
    "seasonId": 3579675,
    "cabinPriceLists": [
        {
        "columns": [
        {
            "periods": [
            {
                "periodFrom": "01.10.2018",
                "periodTo": "31.12.2018"
            }
        ]
        },
        {
        "periods": [
            {
                "periodFrom": "01.04.2018",
                "periodTo": "30.06.2018"
            },
            {
                "periodFrom": "01.01.2018",
                "periodTo": "31.03.2018"
            }
```

```
    ]
    },
    {
    "periods": [
        {
        "periodFrom": "01.07.2018",
        "periodTo": "30.09.2018"
        }
    ]
    }
],
"rows": [
    {
    "cabinDefinitionld": 10279571,
    "prices": [
        {
        "price1": "185.00000",
        "price2": "125.00000"
        },
        {
        "price1": "180.00000",
        "price2": "120.00000"
        },
        {
        "price1": "200.00000",
        "price2": "150.00000"
        }
    ]
    },
    {
    "cabinDefinitionld": 10279572,
    "prices": [
        {
        "price1": "410.00000",
        "price2": "330.00000",
        "price3": "280.00000"
    },
    {
        "price1": "400.00000",
        "price2": "320.00000",
```

```
        "price3": "250.00000"
        },
        {
        "price1": "450.00000",
        "price2": "350.00000",
        "price3": "300.00000"
        }
    ]
    },
    {
    "cabinDefinitionId": 10174571,
    "prices": [
        {
            "price1": "220.00000",
            "price2": "180.00000"
        },
        {
        "price1": "200.00000",
        "price2": "150.00000"
        },
        {
        "price1": "280.00000",
        "price2": "200.00000"
        }
        ]
        }
    ],
    "currency": "EUR"
    }
    ]
},
{
    "seasonId": 1519328,
    "cabinPriceLists": [
    {
        "columns": [
        {
        "periods": [
            {
                "periodFrom": "01.01.2017",
                "periodTo": "31.12.2017"
```

```
        }
    ]
    }
    ],
    "rows": [
    {
        "cabinDefinitionld": 10279571,
        "prices": [
        {
            "price1": "185.00000",
            "price2": "125.00000"
        }
        ]
    ],
    {
    "cabinDefinitionld": 10279572,
    "prices": [
        {
            "price1": "410.00000",
            "price2": "330.00000",
            "price3": "250.00000"
        }
        ]
    ],
    {
    "cabinDefinitionld": 10174571,
    "prices": [
        {
            "price1": "220.00000",
            "price2": "180.00000"
        }
        ]
    }
    ],
    "currency": "EUR"
    }
    ]
    }
]
```

# RestCabinDefinition 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long |  |
| cabinName | String |  |
| cabinPosition | String | "FRONT" , "REAR" - Defined ONLY if <br> there is distinct visual difference <br> between the two cabins |
| cabinType | String | "SINGLE", "DOUBLE", "SPLIT", "BUNK", <br> "DOUBLE_PLUS_SINGLE" |
| description | String |  |

## Example 1

```
{
    "cabinName": "Standard double cabin",
    "cabinPosition": "FRONT",
    "cabinType": "DOUBLE",
    "id": 11109785
    }
```

Example 2
\{
"cabinName": "Premium double cabin",
"cabinPosition": "REAR",
"cabinType": "DOUBLE",
"id": 11136442
\}

## RestCabinDefinitionList

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| status | String |  |
| errorCode | Number | Displays only if error occurred |
| cabinDefinitions | Array of RestCabinDefinition |  |

## Example

```
{
    "status": "OK",
    "cabinDefinitions": [
        {
            "id": 10279571,
            "cabinPosition": "REAR",
            "cabinType": "DOUBLE"
        },
        {
            "id": 10279572,
            "cabinPosition": "FRONT",
            "cabinType": "DOUBLE_PLUS_SINGLE"
        },
        {
            "id": 10174571,
            "cabinPosition": "FRONT",
            "cabinType": "DOUBLE"
        }
    ]
}
```

# RestCabinOccupancy 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| cabinDefinitionld | Long |  |
| availableNumberOfCabins | Integer |  |
| maximumNumberOfCabins | Integer |  |
| numberOfOptions | Integer |  |

## Example 1

```
{
    "cabinDefinitionld": 10279571,
    "availableNumberOfCabins": 2,
    "maximumNumberOfCabins": 2,
    "numberOfOptions": 0
}
```

Example 2

"cabinDefinitionId": 10174571,
"availableNumberOfCabins": 1,
"maximumNumberOfCabins": 1,
"numberOfOptions": 0
\}

# RestCabinPackage 

| Field | Type | Description |
| :-- | :-- | :-- |
| packageld | Long |  |
| packageName | String |  |
| cabinPackageDescription | RestCabinPackageDescription |  |
| seasonCabinCharterSpecificData | Array of RestCabinCharterYachtSeason |  |
| allocations | Array of RestCabinPackageAllocation |  |
| pictures | Array of RestCabinPackagePicture |  |

## Example1

```
{
    "packageld": 10309007,
    "packageName": "CabinPackage1",
    "cabinPackageDescription": {
        "baseFromId": 102753,
        "baseTold": 102753,
        "duration": 7,
        "itinerary": {
            "description": {
            "textDE": "Main description german",
            "textEN": "Main description english",
            "textFR": "Main description french",
            "textHR": "Main description croatian"
        },
        "departure": {
            "textDE": "Departure base date german",
            "textEN": "Departure base date english",
            "textFR": "Departure base date french",
            "textHR": "Departure base date croatian"
        },
        "arrival": {
            "textDE": "Arrival base date german",
            "textEN": "Arrival base date english",
            "textFR": "Arrival base date french",
            "textHR": "Arrival base date croatian"
        },
        "availableOnBoard": {
            "textDE": "Available on board german",
            "textEN": "Available on board english",
            "textFR": "Available on board french",
            "textHR": "Available on board croatian"
        },
        "important": {
            "textDE": "Important german",
            "textEN": "Important english",
            "textFR": "Important french",
            "textHR": "Important croatian"
        },
        "meetingPoint": {
            "textDE": "Meeting point german",
```

```
    "textEN": "Meeting point english",
    "textFR": "Meeting point french",
    "textHR": "Meeting point croatian"
    },
    "ratesInclude": {
    "textDE": "The rates include german",
    "textEN": "The rates include english",
    "textFR": "The rates include french",
    "textHR": "The rates include croatian"
    },
    "ratesDoNotInclude": {
    "textDE": "The rates do not include german",
    "textEN": "The rates do not include english",
    "textFR": "The rates do not include french",
    "textHR": "The rates do not include croatian"
    },
    "itinerary": [
    {
        "day": {
        "textDE": "day one german",
        "textEN": "day one english",
        "textFR": "day one french",
        "textHR": "day one croatian"
        },
        "description": {
        "textDE": "day one details german",
        "textEN": "day one details english",
        "textFR": "day one details french",
        "textHR": "day one details croatian"
        }
    },
    {
        "day": {
            "textDE": "day two german",
            "textEN": "day two english",
            "textFR": "day two french",
            "textHR": "day two croatian"
            },
            "description": {
            "textDE": "day two details german",
            "textEN": "day two details english",
            "textFR": "day two details french",
            "textHR": "day two details croatian"
        }
    }
    ]
    }
},
"seasonCabinCharterSpecificData": [
{
    "seasonId": 7755128,
    "cabinPriceLists": [
    {
        "columns": [
        {
            "periods": [
            {
                "periodFrom": "01.01.2019",
                "periodTo": "31.03.2019"
            },
            {
                "periodFrom": "01.04.2019",
                "periodTo": "30.06.2019"
            }
        ]
        },
        {
            "periods": [
            {
                "periodFrom": "01.10.2019",
                "periodTo": "31.12.2019"
            }
```

```
    }
    },
    {
    "periods": [
        {
            "periodFrom": "01.07.2019",
            "periodTo": "30.09.2019"
        }
    ]
    }
    },
    "rows": [
    {
        "cabinDefinitionId": 10279571,
        "prices": [
        {
            "price1": "180.00000",
            "price2": "120.00000"
        },
        {
            "price1": "185.00000",
            "price2": "125.00000"
        },
        {
            "price1": "200.00000",
            "price2": "150.00000"
        }
    ]
    },
    {
        "cabinDefinitionId": 10279572,
        "prices": [
        {
            "price1": "400.00000",
            "price2": "320.00000",
            "price3": "250.00000"
        },
        {
            "price1": "410.00000",
            "price2": "330.00000",
            "price3": "280.00000"
        },
        {
            "price1": "450.00000",
            "price2": "350.00000",
            "price3": "300.00000"
        }
    ]
    },
    {
        "cabinDefinitionId": 10174571,
        "prices": [
        {
            "price1": "200.00000",
            "price2": "150.00000"
        },
        {
            "price1": "220.00000",
            "price2": "180.00000"
        },
        {
            "price1": "280.00000",
            "price2": "200.00000"
        }
    ]
    }
    ],
    "currency": "EUR"
    }
    ],
    "additionalYachtEquipment": [
        {
```

```
        "id": 10309301,
        "price": "500.00",
        "currency": "EUR",
        "equipmentId": 113410,
        "priceMeasureId": 54,
        "calculationType": "SEPARATE_PAYMENT",
        "condition": [],
        "amount": "500.00"
    }
],
"services": [
    {
        "id": 10309151,
        "serviceId": 119353,
        "price": "0.00",
        "currency": "EUR",
        "priceMeasureId": 54,
        "calculationType": "SEPARATE_PAYMENT",
        "description": [],
        "obligatory": false,
        "amount": "0.00"
    }
]
},
[
    "seasonId": 3579675,
    "cabinPriceLists": [
    {
        "columns": [
        {
            "periods": [
            {
                "periodFrom": "01.10.2018",
                "periodTo": "31.12.2018"
            }
        ]
    },
    {
        "periods": [
            {
                "periodFrom": "01.04.2018",
                "periodTo": "30.06.2018"
            },
            {
                "periodFrom": "01.01.2018",
                "periodTo": "31.03.2018"
            }
        ]
    },
    {
        "periods": [
        {
            "periodFrom": "01.07.2018",
            "periodTo": "30.09.2018"
        }
    ]
    }
],
"rows": [
    {
        "cabinDefinitionId": 10279571,
        "prices": [
            {
                "price1": "185.00000",
                "price2": "125.00000"
            },
            {
                "price1": "180.00000",
                "price2": "120.00000"
            },
            {
                "price1": "200.00000",
```

<!-- Pages 151 - 160 -->

```
        "price2": "150.00000"
        }
        }
        },
        {
            "cabinDefinitionId": 10279572,
            "prices": [
            {
                "price1": "410.00000",
                "price2": "330.00000",
                "price3": "280.00000"
            },
            {
                "price1": "400.00000",
                "price2": "320.00000",
                "price3": "250.00000"
            },
            {
                "price1": "450.00000",
                "price2": "350.00000",
                "price3": "300.00000"
            }
        ]
        },
        {
            "cabinDefinitionId": 10174571,
            "prices": [
            {
                "price1": "220.00000",
                "price2": "180.00000"
            },
            {
                "price1": "200.00000",
                "price2": "150.00000"
            },
            {
                "price1": "280.00000",
                "price2": "200.00000"
            }
        ]
        }
        },
        "currency": "EUR"
        }
    ]
},
{
    "seasonId": 1519328,
    "cabinPriceLists": [
        {
            "columns": [
            {
            "periods": [
            {
                "periodFrom": "01.01.2017",
                "periodTo": "31.12.2017"
            }
        ]
        }
        },
        "rows": [
        {
            "cabinDefinitionId": 10279571,
            "prices": [
            {
                "price1": "185.00000",
                "price2": "125.00000"
            }
        ]
        },
        {
            "cabinDefinitionId": 10279572,
```

```
        "prices": [
            {
                "price1": "410.00000",
                "price2": "330.00000",
                "price3": "250.00000"
            }
        ]
        ],
        {
            "cabinDefinitionId": 10174571,
            "prices": [
            {
                "price1": "220.00000",
                "price2": "180.00000"
            }
        ]
        ]
    ],
    "currency": "EUR"
    }
    }
    }
],
"allocations": [
    {
        "subPackages": [
            10279603,
            10279604
    ],
    "yachts": [
        {
            "id": 479292,
            "name": "Whispper",
            "companyId": 102701,
            "baseId": 102753,
            "locationId": 51,
            "yachtModeId": 263,
            "draft": 1.8,
            "cabins": 2,
            "cabinsCrew": 0,
            "berthsCabin": 4,
            "berthsSalon": 0,
            "berthsCrew": 2,
            "berthsTotal": 6,
            "wc": 1,
            "wcCrew": 0,
            "buildYear": 2004,
            "stearingTypeld": 2,
            "steeringTypeld": 2,
            "sailTypeld": 1,
            "genoaTypeld": 1,
            "standardYachtEquipment": [
            {
                "id": 54325,
                "quantity": 1,
                "equipmentId": 24,
                "comment": [],
                "highlight": false
    },
    {
        "id": 54329,
        "quantity": 1,
        "equipmentId": 18,
        "comment": [],
        "highlight": false
    },
    {
        "id": 54320,
        "quantity": 1,
        "equipmentId": 7,
        "comment": [],
        "highlight": false
```

```
},
{
    "id": 54328,
    "quantity": 1,
    "equipmentId": 100820,
    "comment": {},
    "highlight": false
},
{
    "id": 54323,
    "quantity": 1,
    "equipmentId": 13,
    "comment": {},
    "highlight": false
},
{
    "id": 54319,
    "quantity": 1,
    "equipmentId": 15,
    "comment": [],
    "highlight": false
},
{
    "id": 54322,
    "quantity": 1,
    "equipmentId": 100499,
    "comment": {},
    "highlight": false
},
{
    "id": 54330,
    "quantity": 1,
    "equipmentId": 100619,
    "comment": [],
    "highlight": false
},
{
    "id": 54324,
    "quantity": 1,
    "equipmentId": 6,
    "comment": {},
    "highlight": false
},
{
    "id": 54327,
    "quantity": 1,
    "equipmentId": 116653,
    "comment": [],
    "highlight": false
},
{
    "id": 54326,
    "quantity": 1,
    "equipmentId": 100491,
    "comment": [],
    "highlight": false
},
{
    "id": 54318,
    "quantity": 1,
    "equipmentId": 17,
    "comment": [],
    "highlight": false
},
{
    "id": 54321,
    "quantity": 1,
    "equipmentId": 100498,
    "comment": [],
    "highlight": false
}
],
```

```
    "fourStarCharter": false,
    "mainPictureUrl": "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/main.jpg",
    "picturesURL": [
        "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/main.jpg",
        "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/layout.jpg",
        "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/slika (3).jpg",
        "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/slika (4).jpg",
        "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/slika (5).jpg"
    ],
    "pictures": [
        {
            "src": "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/main.jpg",
            "catalogPhoto": true,
            "mainPicture": true,
            "layoutPicture": false
        },
        {
            "src": "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/layout.jpg",
            "catalogPhoto": true,
            "mainPicture": false,
            "layoutPicture": true
        },
        {
            "src": "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/slika (3).jpg",
            "catalogPhoto": true,
            "mainPicture": false,
            "layoutPicture": false
        },
        {
            "src": "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/slika (4).jpg",
            "catalogPhoto": true,
            "mainPicture": false,
            "layoutPicture": false
        },
        {
            "src": "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/slika (5).jpg",
            "catalogPhoto": true,
            "mainPicture": false,
            "layoutPicture": false
        }
    ],
    "fuelTank": 0,
    "waterTank": 0,
    "mastLength": 21.5,
    "yachtCabin": [
        {
            "cabinDefinitionId": 10279571,
            "quantity": 2
        },
        {
            "cabinDefinitionId": 10174571,
            "quantity": 1
        }
        ]
    }
    }
    ]
}
```

# Example2 

```
{
    "packageId": 10309007,
    "packageName": "CabinPackage2",
```

```
"cabinPackageDescription": {
    "baseFromId": 102546,
    "baseTold": 105646,
    "duration": 4
},
"seasonCabinCharterSpecificData": [
    {
        "seasonId": 7755128,
        "cabinPriceLists": [
        {
            "columns": [
            {
            "periods": [
            {
                "periodFrom": "01.01.2019",
                "periodTo": "31.12.2019"
            }
            ]
        }
    ],
    "rows": [
    {
        "cabinDefinitionId": 10279571,
        "prices": [
            {
                "price1": "150.00000",
                "price2": "100.00000"
            }
        ]
    ],
    {
    "cabinDefinitionId": 10279572,
    "prices": [
        {
            "price1": "300.00000",
            "price2": "250.00000",
            "price3": "200.00000"
        }
    ]
    },
    {
```

```
        "cabinDefinitionId": 10174571,
        "prices": [
            {
                "price1": "200.00000",
                "price2": "150.00000"
            }
        ]
        }
    ],
    "currency": "EUR"
    }
    ],
    "additionalYachtEquipment": [
        {
        "id": 10309301,
        "price": "500.00",
        "currency": "EUR",
        "equipmentId": 113410,
        "priceMeasureId": 54,
        "calculationType": "SEPARATE_PAYMENT",
        "condition": {},
        "amount": "500.00"
    }
    ],
    "services": [
        {
        "id": 10309151,
        "serviceId": 119353,
        "price": "0.00",
        "currency": "EUR",
        "priceMeasureId": 54,
        "calculationType": "SEPARATE_PAYMENT",
        "description": {},
        "obligatory": false,
        "amount": "0.00"
        }
    ]
    }
    ]
}
```

# RestCabinPackageAllocation 

| Field | Type | Description |
| :-- | :-- | :-- |
| subPackages | Array of Long | Shorter package that is part of major <br> package. i.e. half of the journey. |
| yachts | Array of RestCabinCharterYacht |  |

## Example1

```
{
    "subPackages": [
        10279603,
        10279604
    ],
    "yachts": [
        {
            "id": 479292,
            "name": "Whispper",
            "companyId": 102701,
            "baseId": 102753,
            "locationId": 51,
            "yachtModelId": 263,
            "draft": 1.8,
            "cabins": 2,
            "cabinsCrew": 0,
            "berthsCabin": 4,
            "berthsSalon": 0,
            "berthsCrew": 2,
            "berthsTotal": 6,
            "wc": 1,
            "wcCrew": 0,
            "buildYear": 2004,
            "stearingTypeId": 2,
            "steeringTypeId": 2,
            "sailTypeId": 1,
            "genoaTypeId": 1,
            "standardYachtEquipment": [
            {
                "id": 54325,
                "quantity": 1,
                "equipmentId": 24,
                "comment": {},
                "highlight": false
    },
    {
        "id": 54329,
        "quantity": 1,
        "equipmentId": 18,
        "comment": {},
        "highlight": false
    },
    {
        "id": 54320,
        "quantity": 1,
        "equipmentId": 7,
        "comment": {},
        "highlight": false
    },
    {
        "id": 54328,
        "quantity": 1,
        "equipmentId": 100820,
        "comment": {},
        "highlight": false
    },
```

```
{
    "id": 54323,
    "quantity": 1,
    "equipmentId": 13,
    "comment": {},
    "highlight": false
},
{
    "id": 54319,
    "quantity": 1,
    "equipmentId": 15,
    "comment": {},
    "highlight": false
},
{
    "id": 54322,
    "quantity": 1,
    "equipmentId": 100499,
    "comment": {},
    "highlight": false
},
{
    "id": 54330,
    "quantity": 1,
    "equipmentId": 100619,
    "comment": {},
    "highlight": false
},
{
    "id": 54324,
    "quantity": 1,
    "equipmentId": 6,
    "comment": {},
    "highlight": false
},
{
    "id": 54327,
    "quantity": 1,
    "equipmentId": 116653,
    "comment": {},
    "highlight": false
},
{
    "id": 54326,
    "quantity": 1,
    "equipmentId": 100491,
    "comment": {},
    "highlight": false
},
{
    "id": 54318,
    "quantity": 1,
    "equipmentId": 17,
    "comment": {},
    "highlight": false
},
{
    "id": 54321,
    "quantity": 1,
    "equipmentId": 100498,
    "comment": {},
    "highlight": false
}
],
"fourStarCharter": false,
"mainPictureUrl": "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/main.jpg",
"picturesURL": [
    "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/main.jpg",
    "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/layout.jpg",
    "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/slika (3).jpg",
    "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/slika (4).jpg",
    "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/slika (5).jpg"
```

```
    ],
    "pictures": [
        {
            "src": "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/main.jpg",
            "catalogPhoto": true,
            "mainPicture": true,
            "layoutPicture": false
        },
        {
            "src": "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/layout.jpg",
            "catalogPhoto": true,
            "mainPicture": false,
            "layoutPicture": true
        },
        {
            "src": "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/slika (3).jpg",
            "catalogPhoto": true,
            "mainPicture": false,
            "layoutPicture": false
        },
        {
            "src": "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/slika (4).jpg",
            "catalogPhoto": true,
            "mainPicture": false,
            "layoutPicture": false
        },
        {
            "src": "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/slika (5).jpg",
            "catalogPhoto": true,
            "mainPicture": false,
            "layoutPicture": false
        }
    ],
    "fuelTank": 0,
    "waterTank": 0,
    "mastLength": 21.5,
    "yachtCabin": [
        {
            "cabinDefinitionId": 10279571,
            "quantity": 2
        },
        {
            "cabinDefinitionId": 10174571,
            "quantity": 1
        }
    ]
    }
    ]
}
```

# RestCabinPackageDayItinerary 

| Field | Type | Description |
| :-- | :-- | :-- |
| day | InternationalText |  |
| description | InternationalText |  |

## Example1

```
{
    "day": {
    "textDE": "day one german",
```

```
        "textEN": "day one english",
        "textFR": "day one french",
        "textHR": "day one croatian"
        ],
        "description": {
        "textDE": "day one details german",
        "textEN": "day one details english",
        "textFR": "day one details french",
        "textHR": "day one details croatian"
    }
}
```

# Example2 

```
{
    "day": {
        "textDE": "day two german",
        "textEN": "day two english",
        "textFR": "day two french",
        "textHR": "day two croatian"
    },
    "description": {
        "textDE": "day two details german",
        "textEN": "day two details english",
        "textFR": "day two details french",
        "textHR": "day two details croatian"
    }
}
```

## RestCabinPackageDescription

| Field | Type | Description |
| :-- | :-- | :-- |
| baseFromld | Long |  |
| baseTold | Long |  |
| locationFromld | Long |  |
| locationTold | Long |  |
| duration | Integer |  |
| itinerary | RestCabinPackageltinerary |  |

## Example

<!-- Pages 161 - 170 -->

```
{
    "baseFromId": 102753,
    "baseToId": 102753,
    "locationFromId": 51,
    "locationToId": 51,
    "duration": 7,
    "itinerary": {
    "description": {
        "textDE": "Main description german",
        "textEN": "Main description english",
        "textFR": "Main description french",
        "textHR": "Main description croatian"
    },
    "departure": {
        "textDE": "Departure base date german",
        "textEN": "Departure base date english",
        "textFR": "Departure base date french",
        "textHR": "Departure base date croatian"
    },
    "arrival": {
        "textDE": "Arrival base date german",
        "textEN": "Arrival base date english",
        "textFR": "Arrival base date french",
        "textHR": "Arrival base date croatian"
    },
    "availableOnBoard": {
        "textDE": "Available on board german",
        "textEN": "Available on board english",
        "textFR": "Available on board french",
        "textHR": "Available on board croatian"
    },
    "important": {
        "textDE": "Important german",
        "textEN": "Important english",
        "textFR": "Important french",
        "textHR": "Important croatian"
    },
    "meetingPoint": {
        "textDE": "Meeting point german",
        "textEN": "Meeting point english",
        "textFR": "Meeting point french",
```

```
    "textHR": "Meeting point croatian"
},
"ratesInclude": {
    "textDE": "The rates include german",
    "textEN": "The rates include english",
    "textFR": "The rates include french",
    "textHR": "The rates include croatian"
},
"ratesDoNotInclude": {
    "textDE": "The rates do not include german",
    "textEN": "The rates do not include english",
    "textFR": "The rates do not include french",
    "textHR": "The rates do not include croatian"
},
"itinerary": [
    {
        "day": {
            "textDE": "day one german",
            "textEN": "day one english",
            "textFR": "day one french",
            "textHR": "day one croatian"
        },
        "description": {
            "textDE": "day one details german",
            "textEN": "day one details english",
            "textFR": "day one details french",
            "textHR": "day one details croatian"
        }
    },
    {
        "day": {
            "textDE": "day two german",
            "textEN": "day two english",
            "textFR": "day two french",
            "textHR": "day two croatian"
        },
        "description": {
            "textDE": "day two details german",
            "textEN": "day two details english",
            "textFR": "day two details french",
```

```
        "textHR": "day two details croatian"
        }
        }
    }
    }
}
```

# RestCabinPackageItinerary 

| Field | Type | Description |
| :-- | :-- | :-- |
| description | InternationalText |  |
| departure | InternationalText |  |
| arrival | InternationalText |  |
| availableOnBoard | InternationalText |  |
| important | InternationalText |  |
| meetingPoint | InternationalText |  |
| ratesInclude | InternationalText |  |
| ratesDoNotInclude | InternationalText |  |
| itinerary | Array of RestCabinPackageDayItinerary |  |

## Example

"itinerary": \{
"description": \{
"textDE": "Main description german",
"textEN": "Main description english",
"textFR": "Main description french",
"textHR": "Main description croatian"
\},
"departure": \{
"textDE": "Departure base date german",
"textEN": "Departure base date english",
"textFR": "Departure base date french",
"textHR": "Departure base date croatian"
\},
"arrival": \{
"textDE": "Arrival base date german",
"textEN": "Arrival base date english",
"textFR": "Arrival base date french",
"textHR": "Arrival base date croatian"
\},
"availableOnBoard": \{
... NauSYS - The fastest growing Booking System in the World ...

```
    "textDE": "Available on board german",
    "textEN": "Available on board english",
    "textFR": "Available on board french",
    "textHR": "Available on board croatian"
},
"important": {
    "textDE": "Important german",
    "textEN": "Important english",
    "textFR": "Important french",
    "textHR": "Important croatian"
},
"meetingPoint": {
    "textDE": "Meeting point german",
    "textEN": "Meeting point english",
    "textFR": "Meeting point french",
    "textHR": "Meeting point croatian"
},
"ratesInclude": {
    "textDE": "The rates include german",
    "textEN": "The rates include english",
    "textFR": "The rates include french",
    "textHR": "The rates include croatian"
},
"ratesDoNotInclude": {
    "textDE": "The rates do not include german",
    "textEN": "The rates do not include english",
    "textFR": "The rates do not include french",
    "textHR": "The rates do not include croatian"
},
"itinerary": [
{
    "day": {
        "textDE": "day one german",
        "textEN": "day one english",
        "textFR": "day one french",
        "textHR": "day one croatian"
    },
    "description": {
        "textDE": "day one details german",
        "textEN": "day one details english",
```

```
    "textFR": "day one details french",
    "textHR": "day one details croatian"
    }
    },
    {
    "day": {
    "textDE": "day two german",
    "textEN": "day two english",
    "textFR": "day two french",
    "textHR": "day two croatian"
    },
    "description": {
    "textDE": "day two details german",
    "textEN": "day two details english",
    "textFR": "day two details french",
    "textHR": "day two details croatian"
    }
    }
    ]
}
```

# RestCabinPackageList 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| status | String |  |
| errorCode | Number | Displays only if error occurred |
| cabinPackages | Array of RestCabinPackage |  |

## Example

```
{
    "status": "OK",
    "cabinPackages": [
    {
        "packageld": 10309007,
        "packageName": "CabinPackage1",
        "cabinPackageDescription": {
            "baseFromId": 102753,
            "baseTold": 102753,
            "duration": 7,
            "itinerary": {
            "description": {
            "textDE": "Main description german",
            "textEN": "Main description english",
```

```
    "textFR": "Main description french",
    "textHR": "Main description croatian"
    ],
    "departure": {
    "textDE": "Departure base date german",
    "textEN": "Departure base date english",
    "textFR": "Departure base date french",
    "textHR": "Departure base date croatian"
    ],
    "arrival": {
    "textDE": "Arrival base date german",
    "textEN": "Arrival base date english",
    "textFR": "Arrival base date french",
    "textHR": "Arrival base date croatian"
    ],
    "availableOnBoard": {
    "textDE": "Available on board german",
    "textEN": "Available on board english",
    "textFR": "Available on board french",
    "textHR": "Available on board croatian"
    ],
    "important": {
    "textDE": "Important german",
    "textEN": "Important english",
    "textFR": "Important french",
    "textHR": "Important croatian"
    ],
    "meetingPoint": {
    "textDE": "Meeting point german",
    "textEN": "Meeting point english",
    "textFR": "Meeting point french",
    "textHR": "Meeting point croatian"
    ],
    "ratesInclude": {
    "textDE": "The rates include german",
    "textEN": "The rates include english",
    "textFR": "The rates include french",
    "textHR": "The rates include croatian"
    ],
    "ratesDoNotInclude": {
    "textDE": "The rates do not include german",
    "textEN": "The rates do not include english",
    "textFR": "The rates do not include french",
    "textHR": "The rates do not include croatian"
    ],
    "days": [
    {
        "day": {
            "textDE": "day one german",
            "textEN": "day one english",
            "textFR": "day one french",
            "textHR": "day one croatian"
        ],
        "description": {
            "textDE": "day one details german",
            "textEN": "day one details english",
            "textFR": "day one details french",
            "textHR": "day one details croatian"
        ]
    },
    {
        "day": {
            "textDE": "day two german",
            "textEN": "day two english",
            "textFR": "day two french",
            "textHR": "day two croatian"
        ],
        "description": {
            "textDE": "day two details german",
            "textEN": "day two details english",
            "textFR": "day two details french",
            "textHR": "day two details croatian"
```

```
    }
    }
    }
    },
    "seasonCabinCharterSpecificData": [
    {
        "seasonId": 7755128,
        "cabinPriceLists": [
        {
            "columns": [
            {
                "periods": [
            {
                "periodFrom": "01.01.2019",
                "periodTo": "31.03.2019"
            },
            {
                "periodFrom": "01.04.2019",
                "periodTo": "30.06.2019"
            }
        ]
        },
        {
            "periods": [
            {
                "periodFrom": "01.10.2019",
                "periodTo": "31.12.2019"
            }
        ]
        },
        {
            "periods": [
            {
                "periodFrom": "01.07.2019",
                "periodTo": "30.09.2019"
            }
        ]
        }
    ],
    "rows": [
    {
        "cabinDefinitionId": 10279571,
        "prices": [
            {
                "price1": "180.00000",
                "price2": "120.00000"
            },
            {
                "price1": "185.00000",
                "price2": "125.00000"
            },
            {
                "price1": "200.00000",
                "price2": "150.00000"
            }
        ]
        },
    {
        "cabinDefinitionId": 10279572,
        "prices": [
            {
                "price1": "400.00000",
                "price2": "320.00000",
                "price3": "250.00000"
            },
            {
                "price1": "410.00000",
                "price2": "330.00000",
                "price3": "280.00000"
            },
        {
```

```
            "price1": "450.00000",
            "price2": "350.00000",
            "price3": "300.00000"
        }
        }
        },
        {
            "cabinDefinitionId": 10174571,
            "prices": [
            {
                "price1": "200.00000",
                "price2": "150.00000"
            },
            {
                "price1": "220.00000",
                "price2": "180.00000"
            },
            {
                "price1": "280.00000",
                "price2": "200.00000"
            }
        }
        }
        ],
        "currency": "EUR"
        }
    ],
    "additionalYachtEquipment": [
        {
            "id": 10309301,
            "price": "500.00",
            "currency": "EUR",
            "equipmentId": 113410,
            "priceMeasureId": 54,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": [],
            "amount": "500.00"
        }
    ],
    "services": [
        {
            "id": 10309151,
            "serviceld": 119353,
            "price": "0.00",
            "currency": "EUR",
            "priceMeasureId": 54,
            "calculationType": "SEPARATE_PAYMENT",
            "description": [],
            "obligatory": false,
            "amount": "0.00"
        }
    }
},
{
    "seasonId": 3579675,
    "cabinPriceLists": [
        {
            "columns": [
            {
                "periods": [
                    [
                        "periodFrom": "01.10.2018",
                        "periodTo": "31.12.2018"
            }
            ]
            },
            {
                "periods": [
                    [
                        "periodFrom": "01.04.2018",
                        "periodTo": "30.06.2018"
            },
```

```
    {
        "periodFrom": "01.01.2018",
        "periodTo": "31.03.2018"
        }
    }
    },
    {
    "periods": [
        {
            "periodFrom": "01.07.2018",
            "periodTo": "30.09.2018"
        }
    }
    }
},
"rows": [
    {
        "cabinDefinitionld": 10279571,
        "prices": [
        {
            "price1": "185.00000",
            "price2": "125.00000"
        },
        {
            "price1": "180.00000",
            "price2": "120.00000"
        },
        {
            "price1": "200.00000",
            "price2": "150.00000"
        }
    }
    },
    {
    "cabinDefinitionld": 10279572,
    "prices": [
        {
            "price1": "410.00000",
            "price2": "330.00000",
            "price3": "280.00000"
        },
        {
            "price1": "400.00000",
            "price2": "320.00000",
            "price3": "250.00000"
        },
        {
            "price1": "450.00000",
            "price2": "350.00000",
            "price3": "300.00000"
        }
    }
    },
    {
    "cabinDefinitionld": 10174571,
    "prices": [
        {
            "price1": "220.00000",
            "price2": "180.00000"
        },
        {
            "price1": "200.00000",
            "price2": "150.00000"
        },
        {
            "price1": "280.00000",
            "price2": "200.00000"
        }
    }
    },
    "currency": "EUR"
```

```
    }
    }
    },
    {
    "seasonId": 1519328,
    "cabinPriceLists": [
        {
            "columns": [
            {
                "periods": [
                {
                    "periodFrom": "01.01.2017",
                    "periodTo": "31.12.2017"
                }
            ]
        }
    ],
    "rows": [
        {
            "cabinDefinitionId": 10279571,
            "prices": [
            {
                "price1": "185.00000",
                "price2": "125.00000"
                }
            ]
        },
        {
            "cabinDefinitionId": 10279572,
            "prices": [
            {
                "price1": "410.00000",
                "price2": "330.00000",
                "price3": "250.00000"
            }
        ]
        },
        {
            "cabinDefinitionId": 10174571,
            "prices": [
            {
                "price1": "220.00000",
                "price2": "180.00000"
            }
        ]
        }
    ],
    "currency": "EUR"
    }
    ]
    }
],
"allocations": [
    {
        "subPackages": [
            10279603,
            10279604
    ],
    "yachts": [
        {
            "id": 479292,
            "name": "Whispper",
            "companyId": 102701,
            "baseId": 102753,
            "locationId": 51,
            "yachtModelId": 263,
            "draft": 1.8,
            "cabins": 2,
            "cabinsCrew": 0,
            "berthsCabin": 4,
            "berthsSalon": 0,
            "berthsCrew": 2,
```

<!-- Pages 171 - 180 -->

```
"berthsTotal": 6,
"wc": 1,
"wcCrew": 0,
"buildYear": 2004,
"stearingTypeld": 2,
"steeringTypeld": 2,
"sailTypeld": 1,
"genoaTypeld": 1,
"standardYachtEquipment": [
    {
        "id": 54325,
        "quantity": 1,
        "equipmentId": 24,
        "comment": [],
        "highlight": false
    },
    {
        "id": 54329,
        "quantity": 1,
        "equipmentId": 18,
        "comment": [],
        "highlight": false
    },
    {
        "id": 54320,
        "quantity": 1,
        "equipmentId": 7,
        "comment": [],
        "highlight": false
    },
    {
        "id": 54328,
        "quantity": 1,
        "equipmentId": 100820,
        "comment": [],
        "highlight": false
    },
    {
        "id": 54323,
        "quantity": 1,
        "equipmentId": 13,
        "comment": [],
        "highlight": false
    },
    {
        "id": 54319,
        "quantity": 1,
        "equipmentId": 15,
        "comment": [],
        "highlight": false
    },
    {
        "id": 54322,
        "quantity": 1,
        "equipmentId": 100499,
        "comment": [],
        "highlight": false
    },
    {
        "id": 54330,
        "quantity": 1,
        "equipmentId": 100619,
        "comment": [],
        "highlight": false
    },
    {
        "id": 54324,
        "quantity": 1,
        "equipmentId": 6,
        "comment": [],
        "highlight": false
    },
```

```
{
    "id": 54327,
    "quantity": 1,
    "equipmentId": 116653,
    "comment": {},
    "highlight": false
},
{
    "id": 54326,
    "quantity": 1,
    "equipmentId": 100491,
    "comment": {},
    "highlight": false
},
{
    "id": 54318,
    "quantity": 1,
    "equipmentId": 17,
    "comment": {},
    "highlight": false
},
{
    "id": 54321,
    "quantity": 1,
    "equipmentId": 100498,
    "comment": {},
    "highlight": false
}
],
"fourStarCharter": false,
"mainPictureUrl": "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/main.jpg",
"picturesURL": [
    "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/main.jpg",
    "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/layout.jpg",
    "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/slika (3).jpg",
    "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/slika (4).jpg",
    "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/slika (5).jpg"
],
"pictures": [
{
    "src": "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/main.jpg",
    "catalogPhoto": true,
    "mainPicture": true,
    "layoutPicture": false
},
{
    "src": "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/layout.jpg",
    "catalogPhoto": true,
    "mainPicture": false,
    "layoutPicture": true
},
{
    "src": "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/slika (3).jpg",
    "catalogPhoto": true,
    "mainPicture": false,
    "layoutPicture": false
},
{
    "src": "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/slika (4).jpg",
    "catalogPhoto": true,
    "mainPicture": false,
    "layoutPicture": false
},
{
    "src": "http://ws.nausys.com/CBMS-external/rest/yachtModel/263/pictures/slika (5).jpg",
    "catalogPhoto": true,
    "mainPicture": false,
    "layoutPicture": false
}
],
"fuelTank": 0,
"waterTank": 0,
```

```
        "mastLength": 21.5,
        "yachtCabin": [
            {
                "cabinDefinitionId": 10279571,
                "quantity": 2
            },
            {
                "cabinDefinitionId": 10174571,
                "quantity": 1
            }
        ]
        }
        ]
        }
    ],
    [
    "packageId": 10309007,
    "packageName": "CabinPackage2",
    "cabinPackageDescription": {
        "baseFromId": 102546,
        "baseTold": 105646,
        "duration": 4
    ],
    "seasonCabinCharterSpecificData": [
    {
        "seasonId": 7755128,
        "cabinPriceLists": [
            {
                "columns": [
            {
                "periods": [
            {
                "periodFrom": "01.01.2019",
                "periodTo": "31.12.2019"
            }
        ]
        }
        ],
        "rows": [
            {
                "cabinDefinitionId": 10279571,
                "prices": [
            {
                "price1": "150.00000",
                "price2": "100.00000"
            }
        ]
        },
        {
            "cabinDefinitionId": 10279572,
            "prices": [
            {
                "price1": "300.00000",
                "price2": "250.00000",
                "price3": "200.00000"
            }
        ]
        },
        {
            "cabinDefinitionId": 10174571,
            "prices": [
            {
                "price1": "200.00000",
                "price2": "150.00000"
            }
        ]
        }
    ],
    "currency": "EUR"
    }
    ],
```

```
        "additionalYachtEquipment": [
            {
                "id": 10309301,
                "price": "500.00",
                "currency": "EUR",
                "equipmentId": 113410,
                "priceMeasureId": 54,
                "calculationType": "SEPARATE_PAYMENT",
                "condition": [],
                "amount": "500.00"
            }
        ],
        "services": [
            {
                "id": 10309151,
                "serviceld": 119353,
                "price": "0.00",
                "currency": "EUR",
                "priceMeasureId": 54,
                "calculationType": "SEPARATE_PAYMENT",
                "description": [],
                "obligatory": false,
                "amount": "0.00"
            }
        ]
        ]
    }
}
```

# RestCabinPackagePicture 

| Field | Type | Description |
| :-- | :-- | :-- |
| src | String | picture URL |
| isGenuine | Boolean | Indicates whether this is an Original or <br> Generic picture |
| description | RestInternationalText |  |
| lastModified | String |  |

## Example

```
{
    "description": {
        "textDE": "Ger",
        "textEN": "Eng",
        "textFR": "Fra",
        "textHR": "Cro"
    },
    "isGenuine": false,
    "lastModified": "30.01.2024 10:13:52",
    "src": "http://ws.nausys.com/CBMS-external/rest/cabinPackage/29886684/pictures/fridge.jpg"
}
```

## RestCabinPackageYachtCabin

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |

| cabinDefinitionId | Long |  |
| :-- | :-- | :-- |
| quantity | Integer |  |

# Example 1 

$\{$
"cabinDefinitionId": 10279571,
"quantity": 2
\}

## Example 2

$\{$
"cabinDefinitionId": 10174571,
"quantity": 1
\}

## RestCabinPriceList

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long |  |
| currency | String |  |
| columns | Array of RestCabinPriceListColumn |  |
| rows | Array of RestCabinPriceListRow |  |

## Example

$\{$
"id": 10279573,
"currency": "EUR",
"columns": [
$\{$
"periods": [
$\{$
"periodFrom": "01.01.2019",
"periodTo": "31.03.2019"
],
\{
"periodFrom": "01.04.2019",
"periodTo": "30.06.2019"
\}
]

```
},
{
    "periods": [
        {
            "periodFrom": "01.10.2019",
            "periodTo": "31.12.2019"
        }
    ]
    },
    {
        "periods": [
        {
            "periodFrom": "01.07.2019",
            "periodTo": "30.09.2019"
        }
    ]
    }
],
"rows": [
    {
        "cabinDefinitionId": 10279571,
        "prices": [
        {
            "price1": "180.00000",
            "price2": "120.00000"
        },
        {
            "price1": "185.00000",
            "price2": "125.00000"
        },
        {
            "price1": "200.00000",
            "price2": "150.00000"
        }
    ]
    },
    {
    "cabinDefinitionId": 10279572,
    "prices": [
        {
            "price1": "400.00000",
```

```
        "price2": "320.00000",
        "price3": "250.00000"
    },
    {
        "price1": "410.00000",
        "price2": "330.00000",
        "price3": "280.00000"
    },
    {
        "price1": "450.00000",
        "price2": "350.00000",
        "price3": "300.00000"
    }
    ]
    },
    {
    "cabinDefinitionId": 10174571,
    "prices": [
        {
            "price1": "200.00000",
            "price2": "150.00000"
        },
        {
            "price1": "220.00000",
            "price2": "180.00000"
        },
        {
            "price1": "280.00000",
            "price2": "200.00000"
        }
        ]
    }
    ]
}
```

# RestCabinPriceListColumn 

| Field | Type | Description |
| :-- | :-- | :-- |

| periods | Array of RestCabinPriceListPeriod |  |
| :-- | :-- | :-- |

# Example 

$\{$
"periods": [
{
"periodFrom": "01.01.2019",
"periodTo": "31.03.2019"
},
{
"periodFrom": "01.04.2019",
"periodTo": "30.06.2019"
}
]
}

## RestCabinPriceListPeriod

| Field | Type | Description |
| :-- | :-- | :-- |
| periodFrom | String |  |
| periodTo | String |  |

## Example

$\{$
"periodFrom": "01.01.2019",
"periodTo": "31.03.2019"
\}

## RestCabinPriceListPrice

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| price1 | String |  |
| price2 | String | only for cabinType: "DOUBLE", "SPLIT", <br> "BUNK", "DOUBLE_PLUS_SINGLE" |
| price3 | String | only for cabinType: <br> "DOUBLE_PLUS_SINGLE" |

# Calculation explanation: 

price1 - price for 1 person per person
price2 - price for 2 people per person
price3 - price for 3 people per person
i.e. price for DOUBLE_PLUS_SINGLE cabin for 2 people $=$ price $2^{\wedge} 2$

## Example 1

\{
"price1": "200.00000",
"price2": "150.00000"
\}

## Example 2

\{
"price1": "280.00000",
"price2": "200.00000",
"price3": "170.00000"
\}

## RestCabinPriceListRow

| Field | Type | Description |
| :-- | :-- | :-- |
| cabinDefinitionld | Long |  |
| prices | Array of RestCabinPriceListPrice |  |

## Example 1

\{
"cabinDefinitionld": 10279571,
"prices": [
{
"price1": "180.00000",
"price2": "120.00000"
},
{
"price1": "185.00000",
"price2": "125.00000"
},
\{

```
        "price1": "200.00000",
        "price2": "150.00000"
    }
    ]
}
```

# Example2 

```
{
    "cabinDefinitionId": 10279572,
    "prices": [
        {
        "price1": "400.00000",
        "price2": "320.00000",
        "price3": "250.00000"
    },
    {
        "price1": "410.00000",
        "price2": "330.00000",
        "price3": "280.00000"
    },
    {
        "price1": "450.00000",
        "price2": "350.00000",
        "price3": "300.00000"
    }
    ]
}
```

## RestCabinRequest

| Field | Type | Description |
| :-- | :-- | :-- |
| cabinDefinitionId | Long |  |
| numberOfPassengers | Integer |  |
| services | Array of Long |  |
| equipment | Array of Long |  |

## Example

<!-- Pages 181 - 190 -->

```
{
"cabinDefinitionId": 10279571,
"numberOfPassengers": 1,
    "services":[10309151,10309451],
    "equipment": [10309454]
}
```

# RestCabinReservation 

| Field | Type | Description |
| :--: | :--: | :--: |
| id | Long | Official reservation number |
| uuid | String | Security code for web service actions on this reservation. <br> NOTE: If the important data is changed on the reservation, the security code is changed also. |
| reservationStatus | String | Status of the reservation: INFO - just an offer. Doesn't block the yacht in that period, OPTION, RESERVATION - fix booking, STORNO - cancelled option or booking |
| packageld | Long |  |
| waitingForOption | Boolean |  |
| baseFromld | Long | Charter base id of the embarkment base (to see list of all bases call All charter bases service) |
| baseTold | Long | Charter base id of the arrival base (to see list of all bases call All charter bases service) |
| locationFromld | Long | Location id of the embarkment base (to see list of all locations call All locations service) |
| locationTold | Long | Location id of the arrival base (to see list of all locations call All locations service) |
| periodFrom | DateTime 1 | Period from with check in date (date format is dd.MM.yyyy HH:mm) |
| periodTo | DateTime 1 | Period to with check out date (date format is dd.MM.yyyy HH:mm) |
| optionTill | String | Option valid till (dd.MM.yyyy HH:mm). Only if status is OPTION. |
| agency | String | Name of the agency |
| agencyVATID | String | VAT ID of the agency |
| client | RestClient | Info about the client. |
| priceListPrice | String | Ground/basic price |
| agencyPrice | String | Final price expected from agency to pay |
| clientPrice | String | Final price expected from direct client to pay |
| currency | String | Currency of reservation |
| paymentCurrency | String | Currency in which online payment could be executed, possible values are HRK and EUR |

| localizedFinalPrice | String | Client final price in paymentCurrency |
| :-- | :-- | :-- |
| onlinePaymentAmount | String | Price in paymentCurrency for online <br> payment |
| approved | Boolean |  |
| crewlistlink | String |  |
| createdDate | String |  |
| approved | boolean |  |
| paymentPlans | Array of RestYachtReservationPaymentPl <br> an |  |
| payments | Array of RestYachtReservationPayment |  |
| useDepositPayment | Boolean |  |
| numberOfPayments | Integer |  |
| yachtCabins | Array of RestYachtCabinDefinition |  |

# Example 

```
{
"status": "OK",
"id": 855489551,
"uuid": "3720cd44-293a-4648-92ca-4073c7100705",
"reservationStatus": "RESERVATION",
"packageld": 10309002,
"baseFromId": 102754,
"baseTold": 102754,
"locationFromId": 61,
"locationTold": 61,
"periodFrom": "25.07.2019 08:00",
"periodTo": "06.08.2019 18:00",
"client": [
    "company": false,
    "name": "Rest client",
    "email": "somebody@someone.some"
},
"priceListPrice": "300.00",
"agencyPrice": "255.00",
"clientPrice": "255.00",
"currency": "EUR",
"paymentCurrency": "EUR",
"crewlistlink": "https://crew.nausys.com/855489551/null/",
"createdDate": "12.11.2019",
"approved": true,
"paymentPlans": [
{
    "id": 257817752,
    "date": "12.11.2019",
    "amount": "510.00",
    "amountInPaymentCurrency": "510.00",
    "paid": true
}
],
"payments": [
{
    "id": 478751,
    "date": "03.09.2015",
    "amount": "100.00",
    "amountInPaymentCurrency": "100.00",
    "paymentCurrency": "EUR"
}
],
"useDepositPayment": false,
"numberOfPayments": 1,
```

"yachtCabins": [
\{
"cabinDefinitionId": 10279571,
"numberOfPassengers": 1,
"discounts": [
\{
"discountItemId": 1525416,
"amount": 15,
"type": "PERCENTAGE"
\}
],
"additionalEquipment": [
\{
"id": 473651,
"quantity": "2.00",
"listPrice": "200.00",
"currency": "EUR",
"priceMeasureId": 54,
"equipmentId": 4,
"calculationType": "SEPARATE_PAYMENT",
"condition": (1),
"amount": "200.00"
\}
],
"services": [
\{
"id": 279940951,
"quantity": "2.00",
"listPrice": "0.00",
"currency": "EUR",
"priceMeasureId": 54,
"serviceId": 119353,
"calculationType": "SEPARATE_PAYMENT",
"condition": (1),
"amount": "0.00"
\},
\{
"id": 279940952,
"quantity": "2.00",
"listPrice": "250.00",
"currency": "EUR",
"priceMeasureId": 54,
"serviceId": 8219444,
"calculationType": "SEPARATE_PAYMENT",
"condition": (1),
"amount": "250.00"
\}
]
],
\{
"cabinDefinitionId": 10279571,
"numberOfPassengers": 1,
"discounts": [
\{
"discountItemId": 1525416,
"amount": 15,
"type": "PERCENTAGE"
\}
]
]
\}
\}

# RestCabinReservationInfoRequest 

| Field | Type | Description |
| :-- | :-- | :-- |
| credentials | RestAuthentication |  |
| client | RestClient |  |

| packageld | Long |  |
| :--: | :--: | :--: |
| agencyID | Long | Used only in case you are charter operator, for agencies this field is ignored |
| periodFrom | Date |  |
| periodTo | Date |  |
| onlinePayment | Boolean | This parameter is TRUE only when info request is created for online booking payment, otherwise is FALSE |
| promoCode | String |  |
| numberOfPayments | Integer |  |
| paymentCurrency | String |  |
| restCabins | Array of RestCabinRequest |  |
| displayCurrency | String | optional parameter (defaults to "DEFAULT") <br> For charter company login possible values are: <br> "DEFAULT" (returns amounts in default reservation currency) <br> "CLIENT" (returns amounts in currency in which the client should pay to charter company) <br> For agency login possible values are: <br> "DEFAULT" (returns amounts in default reservation currency) <br> "CLIENT" (returns amounts in currency in which the client should pay to agency) <br> "COMPANY" (return amounts in currency in which the agency pays to charter company) |

# Example

```
{
"client": {
"name": "Rest",
    "surname": "client",
    "company": "false",
    "vatNr": "",
    "address": "address",
    "zip": "",
    "city": "",
    "countryId": "1",
    "email": "somebody@someone.some",
    "phone": "",
    "mobile": "",
    "skype": "" },
    "credentials": {
        "username": "xxx@xxxx",
        "password": "xxxxxxxxx"
    },
"periodFrom": "25.07.2019",
    "periodTo": "06.08.2019",
    "packageId": 10309002,
"agencyId": "",
"onlinePayment":"false",
"numberOfPayments" : "2",
"restCabins": [
{
"cabinDefinitionId": 10279571,
"numberOfPassengers": 1,
    "services":[10309151,10309451],
    "equipment": [10309454]
},
{
    "cabinDefinitionId": 10279571,
    "numberOfPassengers": 1,
    "services": [],
    "equipment": []
}
]
}
```

# RestCabinReservationPriceInfo 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| price1 | String |  |
| price2 | String | only for cabinType: "DOUBLE", "SPLIT", <br> "BUNK", "DOUBLE_PLUS_SINGLE" |
| price3 | String | only for cabinType: <br> "DOUBLE_PLUS_SINGLE" |
| discounts | Array of RestDiscount |  |
| currency | String |  |

## Calculation explanation:

price1 - price for 1 person per person
price2 - price for 2 people per person
price3 - price for 3 people per person
i.e. price for DOUBLE_PLUS_SINGLE cabin for 2 people $=$ price $2 * 2$

```
Example 1
{
    "currency": "EUR",
    "price1": "200.00000",
    "price2": "150.00000",
    "discounts": [
        {
            "discountItemId": 1525416,
            "amount": 15,
            "type": "PERCENTAGE"
        }
    ]
}
```

# Example 2 

```
{
    "currency": "EUR",
    "price1": "280.00000",
    "price2": "200.00000",
    "price3": "170.00000",
    "discounts": [
        {
            "discountItemId": 1525416,
            "amount": 15,
            "type": "PERCENTAGE"
        }
    ]
}
```

## RestCharterBase

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long | ID |
| locationId | Long | location ID <br> Relates to Catalogue endpoint All <br> locations |

| companyld | Long | charter company ID <br> Relates to Catalogue endpoint All charter <br> companies |
| :-- | :-- | :-- |
| checkInTime | Time1 | check in time |
| checkOutTime | Time1 | check out time |
| lat | Decimal | GPS Latitude |
| lon | Decimal | GPS Longitude |
| baseManagerld | Long | visible only to fleet operators <br> Relates to Catalogue endpoint All users |
| domainld | Long | visible only to fleet operators <br> Relates to Catalogue endpoint All <br> domains |
| secondaryBase | Boolean |  |
| disabled | Boolean | Array of base notes on all available <br> languages |
| returnToBaseNote | Array | Array of base delay notes on all available <br> languages |
| returnToBaseDelayNote | Array |  |
| disabledDate | Date |  |
| openBaseDate | Date |  |
| closedBaseDate | Date |  |

# Example 

```
{
    "id": 110527,
    "locationld": 51,
    "companyld": 110525,
    "checkInTime": "17:00",
    "checkOutTime": "08:00",
    "disabledDate": "03.01.2024",
    "openBaseDate": "03.01.2024",
    "closedBaseDate": "03.01.2024",
    "lat": 44.8726,
    "lon": 13.84513,
    "returnToBaseNote" : {
        "textDE" : "example text",
        "textEN" : "example text",
        "textHR" : "example text",
    },
    "returnToBaseDelayNote" : {
        "textDE" : "example text",
        "textEN" : "example text",
        "textHR" : "example text",
    }
}
```

## RestCharterBaseList

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| status | String |  |
| errorCode | Number | Displays only if error occurred |
| bases | Array of RestCharterBase |  |

# Example 

```
{"status": "OK",
    "bases": [
        {
            "id": 110527,
            "locationId": 51,
            "companyId": 110525,
            "checkInTime": "17:00",
            "checkOutTime": "08:00",
            "lat": 44.8726,
            "lon": 13.84513
        },
        {
            "id": 579212,
            "locationId": 133729,
            "companyId": 110525,
            "checkInTime": "17:00",
            "checkOutTime": "08:00",
            "lat": 45.53419,
            "lon": 13.65292
        },
        {
            "id": 110529,
            "locationId": 60,
            "companyId": 110525,
            "checkInTime": "17:00",
            "checkOutTime": "08:00",
            "lat": 44.05391,
            "lon": 15.29812
        }
    ]
}
```

## RestCharterCompany

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long | company ID |
| name | String | company (brand) name |
| companyName | String | official company name |
| address | String | address of headquarters |
| city | String | city of headquarters |
| zip | String | zip postal code of headquarters |
| countryId | Long | country ID <br> Relates to Catalogue endpoint All <br> countries |
| phone | String | contact phone of company |

| fax | String | contact fax of company |
| :-- | :-- | :-- |
| mobile | String | contact mobile of company |
| vatcode | String | VAT code of company |
| web | String | website |
| email | String | e-mail address |
| pac | boolean | private access company (offline <br> company) |
| bankAcounts | Array of RestBankAccount |  |
| isPremium | boolean | is charter company premium |

# Example 

```
{
    "id": 120920,
    "name": "Adriatic Challenge",
    "companyName":"ADRIATIC CHALLENGE putnička agencija d.o.o.",
    "address": "Obala kralja Petra Krešimira IV. 38/a
23210 Biograd n/M",
    "city": "Biograd n/M",
    "zip": "23210",
    "countryld": 1,
    "phone": "+385 23 385088",
    "fax": "+385 23 386078",
    "mobile": "+385 98 219934",
    "vatcode": "22948168921",
    "web": "www.adriatic-challenge.com",
    "email": "notification@adriatic-challenge.com",
    "pac": false,
    "bankAcounts": [{
        "bankName": "EXAMPLE BANK D.D.",
        "bankAddress": "-",
        "accountNumber": "1111111-1111111111",
        "swift": "SWIFT111",
        "iban": "HR11 1111 1111 1111 1111 1",
        "sepa": "SEPA111"
    ]] ,
    "isPremium": true
}
```

## RestCharterCompanyList

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| status | String |  |
| errorCode | Number | Displays only if error occurred |

# Example 

```
{
    "status": "OK",
    "companies": [
        {
            "id": 110525,
            "name": "Burin Yacht Charter d.o.o",
            "address": "Marina Dalmacija 1, Bibinje-Sukošan 
23206 Sukošan",
            "city": "Sukošan",
            "zip": "23206 ",
            "countryld": 1,
            "phone": "+ 385 23 394 410",
            "fax": "+ 385 23 394 411",
            "mobile": "+386 30 643 033",
            "vatcode": "45576210409",
            "web": "www.burinyachtcharter.com",
            "email": "booking@burinyachtcharter.com",
            "pac": false,
            "bankAccounts": [
            {
                "bankName": "Zagrebačka banka d.d. Zagreb",
                "bankAddress": "Paromlinska 2, 10000 Zagreb",
                "accountNumber": "2142345345",
                "swift": "12314234",
                "iban": "32456 4526453 453665"
            },
            {
                "bankName": "Zagrebačka banka d.d. Zagreb",
                "bankAddress": "Paromlinska 2, 10000 Zagreb",
                "accountNumber": "2360000-234235535"
            }
        ]
    },
    {
        "id": 100553,
        "name": "Way Point Rovinj - Pula/Marine Media d.o.o.",
        "address": "",
        "city": "Rijeka",
        "zip": "51000",
        "countryld": 1,
        "phone": " +385 52 815 670",
        "fax": "+385 52 814 161",
        "vatcode": "37037737955",
        "web": "www.waypoint-int.com",
        "email": "sales@waypoint-int.com",
        "pac": false
    },
    {
        "id": 828269,
        "name": "Sailazores Yacht Charter",
        "address": "Rua Maestro Francisco Lacerda, 13
9800-551 Velas, São Jorge, Azores",
        "city": "Velas, São Jorge, Azores",
        "zip": "9800-551",
        "countryld": 100121,
        "phone": "+351 92 4128888 | +351 91 6231111 | +351 91 1065555",
        "vatcode": "PT509 557 481",
        "web": "www.sailazores.pt",
        "email": "info@sailazores.pt",
        "pac": false
    }
    ]
}
```

## RestClient

<!-- Pages 191 - 200 -->

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long | id of the client |
| company | Boolean | obligatory field, if client is company set <br> to TRUE |
| vatNr | String | obligatory if client is a company |
| name | String | obligatory |
| surname | String | obligatory |
| address | String |  |
| zip | String |  |
| city | String |  |
| countryld | Long | obligatory for certain Fleet operators |
| email | String | obligatory |
| phone | String |  |
| mobile | String |  |
| skype | String |  |
| language | String | example: <br> CROATIAN,ENGLISH,GERMAN,SLOVENIAN <br> ,ITALIAN,POLISH,RUSSIAN,CZECH,FRENC <br> H,SLOVAK,DUTCH,SPANISH,SWEDISH,NO <br> RWEGIAN,GREEK, TURKISH, LATVIAN, <br> LITHUANIAN |

# Example 

```
{
"id": 1231234,
"name": "Rest",
"surname": "client",
    "company": "false",
    "vatNr": "",
    "address": "address",
    "zip": "",
    "city": "",
    "countryId": 1,
    "email": "someone@something.some",
    "phone": "",
    "mobile": "",
    "skype": "",
"language": "ENGLISH"
}
```

## RestClient2

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| credentials | RestAuthentication | Only when used as request object |

| id | Long | Not used when creating new contact, received as response. |
| :--: | :--: | :--: |
| name | String |  |
| surname | String |  |
| vatNr | String |  |
| address | String |  |
| city | String |  |
| countryld | Long | id representing one of All countries |
| stateld | Long | id representing one of All country states |
| email | String |  |
| phone | String |  |
| mobile | String |  |
| skype | String |  |
| agencyCodeID | String |  |
| note | String |  |
| passportNumber | String |  |
| instagram | String |  |
| title | String |  |
| fax | String |  |
| zipCode | String |  |
| birthday | Date |  |
| preferredLanguage | String | CROATIAN,ENGLISH,GERMAN,SLOVENIAN ,ITALIAN,POLISH,RUSSIAN,CZECH,FRENC H,SLOVAK,DUTCH,SPANISH,SWEDISH,NO RWEGIAN,GREEK |
| gender | String | MALE,FEMALE |
| bookingChannel | String | TEL,MAIL,ONLINE,ATEXPO |
| disabled | Boolean | Used to disable contact as deletion is not possible due to possible usage on existing documents |
| updateFields | String[] | Array of field names to be updated (used when field needs to be updated to "null" value) otherwise, only received fields are updated, other are left unchanged |
| company | Boolean | default value false |
| belongsTo | Long | Id of user that client belongs to |
| lastModifyTime | String |  |

# Example

```
{
    "address": "Lukavec",
    "agencyCodeID": "123456",
    "birthday": "02.11.1993",
    "city": "Velika Gorica",
    "company": true,
    "countryId": 100181,
    "disabled": false,
    "email": "test@test.com",
    "fax": "+4678676",
    "id": 90201,
    "mobile": "+123456486",
    "name": "Test contact",
    "note": "123 note 123",
    "phone": "+5867866",
    "skype": "lukaskype",
    "vatNr": "123456789",
    "zipCode": "48600",
"companyName" : "FREELANCER",
"belongsTo":1737135,
"lastModifyTime" : "02.08.2023 16:25"
}
```

Example 2

```
{
    "credentials": {
        "username": "${USERNAME}",
        "password": "${PASSWORD}"
    },
    "address": "marmaris cad",
    "agencyCodeID": "123456",
    "birthday": "02.11.1993",
    "city": "mula",
    "countryId": 100181,
    "disabled": false,
    "email": "test@test.com",
    "fax": "+4678676",
    "id": 2554451,
    "mobile": "+123456486",
    "name": "Test contact",
    "note": "123 note 123",
    "phone": "+5867866",
    "skype": "lukaskype",
    "vatNr": "123456789",
    "zipCode": "48600",
"belongsTo":1737135
}
```

# RestClientList 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| status | String |  |
| errorCode | Number | Displays only if error occurred |
| clients | Array of RestClient2 |  |

# Example 

```
{
    "clients": [
    {
        "address": "address",
        "birthday": "28.12.2021",
        "city": "",
        "company": false,
        "countryId": 1,
        "disabled": false,
        "email": "marko.pezo@nausys.com",
        "id": 2658551,
        "mobile": "",
        "name": "Rest",
        "phone": "",
        "skype": "",
        "surname": "client",
        "vatNr": "",
        "zipCode": ""
    },
    {
        "birthday": "28.12.2021",
        "company": false,
        "disabled": false,
        "email": "test@test.com",
        "id": 2127991,
        "name": "Saint",
        "surname": "Nicholas"
    }
]
}
```

## RestComment

| Field | Type | Description |
| :-- | :-- | :-- |
| internalNote | Boolean |  |
| showInBase | Boolean |  |
| note | String |  |
| madeById | Long | Id of person that made comment |
| madeTime | String | format dd.MM.yyyy HH:mm:ss |
| id | Long |  |

## Example

```
{
"internalNote":true,
"madeById":"1142759",
"madeTime":"29.09.2022 17:54:45",
"note":"probni commentar",
"showInBase":false,
"id":37057554
}
```

# RestCountry 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long | ID |
| code | String | optional <br> short string representation of country <br> ISO 3166 Alpha 3 |
| code2 | String | optional <br> short string representation of country <br> ISO 3166 Alpha 2 |
| name | RestInternationalText | name |

## Example

```
{
    "id": 1,
    "code": "HRV",
    "code2": "HR",
    "name": {
        "textDE": "Kroatien",
        "textEN": "Croatia",
        "textHR": "Hrvatska",
        "textIT": "Croazia",
        "textSI": "Hrvatska"
    }
}
```

## RestCountryList

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| status | String |  |
| errorCode | Number | Displays only if error occurred |
| countries | Array of RestCountry |  |

## Example

```
{
    "status": "OK",
    "countries": [
        {
            "id": 100184,
            "code": "AFG",
            "name": {
            "textDE": "Afghanistan",
            "textEN": "Afghanistan",
            "textHR": "Afghanistan",
            "textIT": "Afghanistan",
            "textSI": "Afghanistan"
```

```
    }
    },
    {
        "id": 100125,
        "code": "ALB",
        "name": {
            "textDE": "Albanien",
            "textEN": "Albania ",
            "textHR": "Albanija",
            "textIT": "Albania ",
            "textSI": "Albanija"
        }
    },
    {
        "id": 100111,
        "code": "DZA",
        "name": {
            "textDE": "Algerien ",
            "textEN": "Algeria ",
            "textHR": "Alžir",
            "textIT": "Algeria",
            "textSI": "Alžir"
        }
    }
}
```

# RestCountryState 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long | ID |
| countryld | Long | ID representing Country |
| name | String | name |

## Example

```
{
    "countryld": 100105,
    "id": 10268315,
    "name": "lowa"
}
```

## RestCountryStateList

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| status | String |  |
| errorCode | Number | Displays only if error occurred |
| bases | Array of RestCountryState |  |

# Example 

```
{
    "status": "OK",
    "countries": [
        {
            "countryId": 100105,
            "id": 10268318,
            "name": "Indiana"
        },
        {
            "countryId": 100105,
            "id": 10268315,
            "name": "Iowa"
        }
    ]
}
```

## RestCrewList

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| reservationId | Long |  |
| yachtName | String |  |
| companyName | String |  |
| baseFrom | String |  |
| baseTo | String |  |
| periodFrom | Date | format dd.MM.yyyy |
| periodTo | Date | format dd.MM.yyyy |
| maxPassengers | Number |  |
| insertSkipper | Boolean | true or false |
| passengers | Array of RestPassenger |  |
| flightNumber | String |  |
| airportToBaseTransfer | Boolean | true or false |
| arrivalTime | Time1 | format HH:mm |
| crewListNote | String |  |

## Example

```
{
    "reservationId": 3618721,
```

```
    "yachtName": "Jeanneau 53 - 5 cab. - Anja-Sophie - 2011.",
    "companyName": "Pitter Yachtcharter",
    "baseFrom": "Göcek",
    "baseTo": "Göcek",
    "periodFrom": "22.08.2015",
    "periodTo": "05.09.2015",
    "maxPassengers": 10,
    "insertSkipper": true,
    "passengers": [
        {
            "skipper": false,
            "name": "URSULA",
            "surname": "EDER",
            "birthDate": "18.02.1964",
            "birthPlace": "SALZBURG",
            "birthCountry": "AUT",
            "nationality": "AUT",
            "documentType": "PASSPORT",
            "documentNumber": "P3488147",
"disabledPerson": true
        },
        {
            "skipper": false,
            "name": "LUKAS PHILIPP",
            "surname": "JIRSA",
            "birthDate": "29.03.1990",
            "birthPlace": "SALZBURG",
            "birthCountry": "AUT",
            "nationality": "AUT",
            "documentType": "PASSPORT",
            "documentNumber": "P6226263",
"shoeSize": "39"
    },
    {
        "skipper": false,
        "name": "MARTIN",
        "surname": "DR.MED.UNIV. JIRSA",
        "birthDate": "04.08.1952",
        "birthPlace": "PRAG",
        "birthCountry": "CZE",
        "nationality": "AUT",
        "documentType": "PASSPORT",
        "documentNumber": "P3193621"
    },
    {
        "skipper": false,
        "name": "GIOVANNA",
        "surname": "FARTACEK",
        "birthDate": "02.09.1991",
        "birthPlace": "SALZBURG",
        "birthCountry": "AUT",
        "nationality": "AUT",
        "documentType": "PASSPORT",
        "documentNumber": "U0073870"
    },
    {
        "skipper": false,
        "name": "PETRA",
        "surname": "FEDRIZZI",
        "birthDate": "06.10.1987",
        "birthPlace": "ST. PöLTEN",
        "birthCountry": "AUT",
        "nationality": "AUT",
        "documentType": "PASSPORT",
        "documentNumber": "P5813632"
    },
    {
        "skipper": false,
        "name": "DANA",
        "surname": "DR. IUR. JIRSA",
        "birthDate": "27.05.1954",
        "birthPlace": "PARDUBICE",
```

```
            "birthCountry": "CZE",
            "nationality": "AUT",
            "documentType": "PASSPORT",
            "documentNumber": "P2275073"
    },
    {
        "skipper": false,
        "name": "VALENTIN",
        "surname": "EDER",
        "birthDate": "23.10.1990",
        "birthPlace": "SALZBURG",
        "birthCountry": "AUT",
        "nationality": "AUT",
        "documentType": "PASSPORT",
        "documentNumber": "P4929571"
    },
    {
        "skipper": true,
        "skipperLicence": "S-007913",
        "vhfLicence": "",
        "skipperEmail": "KL.EDER@AON.AT",
        "skipperMobile": "+436506644334",
        "name": "KLAUS",
        "surname": "DR. MED. EDER",
        "birthDate": "08.07.1955",
        "birthPlace": "LINZ",
        "birthCountry": "AUT",
        "nationality": "AUT",
        "documentType": "PASSPORT",
        "documentNumber": "P3372388"
    },
    {
        "skipper": false,
        "name": "NIKOLAUS",
        "surname": "EDER",
        "birthDate": "15.11.1990",
        "birthPlace": "SALZBURG",
        "birthCountry": "AUT",
        "nationality": "AUT",
        "documentType": "PASSPORT",
        "documentNumber": "P7891489"
    }
    ],
    "flightNumber": "XQ 0797",
    "airportToBaseTransfer": true,
    "arrivalTime": "23.08.2015 14:20",
    "crewListNote": ""
}
```

# RestDiscount 

| Field | Type | Description |
| :-- | :-- | :-- |
| discountItemId | Long | Refers to RestDiscountItem |
| amount | Decimal |  |
| type | String |  |

## Example

1
"discountItemId": 930176,

"amount": 15.00, "type": "PERCENTAGE" \}

# RestDiscountltem 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long |  |
| name | RestInternationalText |  |

## Example

```
{
    "id": 117923,
    "name": {
        "textDE": "Yachtclub Rabatt",
        "textEN": "Yachtclub discount",
        "textHR": "Yachtclub popust",
        "textIT": "Yachtclub sconto",
        "textSI": "Yachtclub popust"
    }
}
```

## RestDiscountltemList

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| status | String |  |
| errorCode | Number | Displays only if error occurred |
| discounts | Array of RestDiscountltem |  |

## Example

```
{"status": "OK",
    "discounts": [
        {"id": 579232,
            "name": {"textDE": "1 Wochen",
            "textEN": "1 week",
            "textHR": "1 tjedan",
            "textIT": "1 settimana",
            "textSI": "1 tjedan"
        }
    },
    {
        "id": 846076,
        "name": {
            "textDE": "10-jähriges Jubiläum",
            "textEN": "10 year anniversary",
            "textHR": "Popust za 10. godišnjicu",
            "textIT": "10 ' anniversario",
            "textSI": "10. obletnica"
        }
    },
    {
        "id": 107516,
        "name": {
```

<!-- Pages 201 - 210 -->

```
                    "textDE": "11 Tage Charter",
                    "textEN": "11 days charter",
                    "textHR": "11 dana najma",
                    "textIT": "11 giorni charter",
                    "textSI": "11 dana najma"
                }
    }
}
```

# RestEngineBuilder 

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long |  |
| name | String |  |

## Example

```
{
    "id": 933521,
    "name": "Hyundai"
    }
```

## RestEngineBuilderList

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| status | String |  |
| errorCode | Number | Displays only if error occurred |
| builders | Array of RestEngineBuilder |  |

## Example

```
{
    "status": "OK",
    "builders": [
        {
        "id": 5203486,
        "name": "BMW Marine"
    },
    {
        "id": 830197,
        "name": "Caterpilar Diesel"
    },
    {
        "id": 825608,
        "name": "Cummins"
```

```
    },
    {
        "id": 996302,
        "name": "Detroit Diesel"
    },
    {
        "id": 120884,
        "name": "Yanmar"
    }
    ]
}
```

# RestEquipment 

| Field | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| categoryId | Long | Relates to Catalogue endpoint All <br> equipment categories |
| name | RestInternationalText |  |

## Example

```
{
    "id":"4",
"categoryId":599275,
    "name": {
        "textDE":"Klimaanlage",
"textEN":"Air condition",
"textHR":"Klima ureaj",
"textIT":"Aria condizionata"
    }
}
```

## RestEquipmentCategory

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long |  |
| name | RestInternationalText |  |

## Example

```
{
    "id": 599270,
    "name": {
        "textDE": "Unterhaltungs",
        "textEN": "Entertainment ",
        "textHR": "Zabava",
        "textIT": "I'intrattenimento",
        "textSI": "Zabava"
```

# RestEquipmentCategoryList 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| status | String |  |
| errorCode | Number | Displays only if error occurred |
| equipmentCategories | Array of RestEquipmentCategory |  |

## Example

```
{
    "status": "OK",
    "equipmentCategories": [
        {
            "id": 599271,
            "name": {
                "textDE": "Segel",
                "textEN": "Sails",
                "textHR": "Jedrilje",
                "textIT": "Vele",
                "textSI": "Jedrilje"
            }
        },
        {
            "id": 599268,
            "name": {
                "textDE": "Navigation",
                "textEN": "Navigation",
                "textHR": "Navigacija",
                "textIT": "Navigazione",
                "textSI": "Navigacija"
            }
        },
        {
            "id": 599272,
            "name": [
                "textDE": "Sicherheitsausrüstung",
                "textEN": "Safety",
                "textHR": "Sigurnost",
                "textIT": "Sicurezza",
                "textSI": "Sigurnost"
            }
        }
    ]
}
```

## RestEquipmentList

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| status | String |  |
| errorCode | Number | Displays only if error occurred |
| equipment | Array of RestEquipment |  |

# Example 

```
{
    "status": "OK",
    "equipment": [
        {
            "id": 113406,
            "name": {
                "textDE": "220v Stecker",
                "textEN": "220 volt socket",
                "textHR": "Utičnica 220v",
                "textIT": "220v spina",
                "textSI": "Utičnica 220v"
            }
        },
        {
            "id": 922685,
            "name": {
                "textDE": "2 Kabinen in der Hülle - erreichbar innen und außen",
                "textEN": "2 cabins in the hull - reachable inside and outside",
                "textHR": "2 kabine u trupu - dostupne izvana i iznutra",
                "textIT": "2 cabine nello scafo - raggiungibile all'interno e all'esterno",
                "textSI": "2 kabine v trupu - dosegljiva znotraj in zunaj"
            }
        },
        {
            "id": 113410,
            "name": {
                "textDE": "3-Blatt Faltpropeller",
                "textEN": "3 blade folding propeller",
                "textHR": "Propeler sa 3 sklopive elise",
                "textIT": "3 pale pieghevoli",
                "textSI": "Propeler sa 3 sklopive elise"
            }
        }
    }
}
```

## RestEuminia

| Field | Type | Description |
| :-- | :-- | :-- |
| cleanliness | String |  |
| equipment | String |  |
| personalService | String |  |
| pricePerformance | String |  |
| recommendation | String |  |
| total | String |  |
| reviews | String |  |

## Example:

```
{
    "cleanliness":"4.98",
    "equipment":"4.86",
    "personalService":"4.92",
    "pricePerformance":"4.83",
    "recommendation":"100 %",
    "total":"4.90",
    "reviews":"12"
}
```

# RestFreeCabin 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| cabinId | Long |  |
| numberOfFreeCabins | Integer |  |
| status | String | Options: FREE or UNDER_OPTION. <br> UNDER_OPTION will be provided only if <br> ignoreOptions is included in request. |
| prices | RestCabinReservationPriceInfo |  |
| obligatoryExtras | Array of RestYachtReservationService | Obligatory extras will be included in <br> respose only if extendedDataSet <br> parameter is provided in request. |

## Example 1

```
{
    "cabinId": 10279571,
    "numberOfFreeCabins": 2,
    "prices": {
        "currency": "EUR",
        "price1": "200.00000",
        "price2": "150.00000",
        "discounts": [
        {
            "discountItemId": 1525416,
            "amount": 15,
            "type": "PERCENTAGE"
        }
    }
    }
}
```

Example 2
\{
"cabinDefinitionId": 10174571,
"numberOfFreeCabins": 1,
"prices": \{
"currency": "EUR",
"price1": "280.00000",
"price2": "200.00000",
"price3": "170.00000",
"discounts": [

```
    {
    "discountItemId": 1525416,
    "amount": 15,
    "type": "PERCENTAGE"
    }
    ],
    "obligatoryExtras": [
        {
        "amount": "0.0400",
        "amountIsPercentage": true,
        "calculationType": "ADVANCE_PAYMENT",
        "condition": {},
        "createdById": 123456789,
        "createdTime": "24.10.2024 09:50:25",
        "currency": "EUR",
        "listPrice": "0.00",
        "percentageCalculationType": "FINAL_CLIENT_PRICE",
        "priceMeasureId": 54,
        "quantity": "1.00",
        "quantityExtras": "1.00",
        "quantityPriceMeasure": "1.00",
        "serviceld": 17099456,
        "totalPrice": "112.60"
        },
        {
        "amount": "290.90",
        "calculationType": "ADVANCE_PAYMENT",
        "condition": {
            "textDE": "Destination fee includes.",
            "textEN": "Destination fee includes.",
            "textIT": "Destination fee includes.",
            "textNO": "Destination fee includes."
        },
        "createdById": 123456789,
        "createdTime": "24.10.2024 09:50:25",
        "currency": "EUR",
        "listPrice": "290.90",
        "priceMeasureId": 52,
        "quantity": "1.00",
        "quantityExtras": "1.00",
        "quantityPriceMeasure": "1.00",
```

```
        "serviceld": 29513657,
        "totalPrice": "290.90"
        }
        ]
    }
}
```

# RestFreeCabinPackage 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| packageld | Long |  |
| cabinPackagePeriods | Array of RestFreeCabinPackagePeriod |  |

## Example

\{
"packageld": 10234055,
"cabinPackagePeriods": [
\{
"periodFrom": "01.08.2019",
"periodTo": "08.08.2019",
"freeCabins": [
\{
"cabinld": 10279571,
"numberOfFreeCabins": 2,
"prices": [
"currency": "EUR",
"price1": "200.00000",
"price2": "150.00000",
"discounts": [
\{
"discountltemld": 1525416,
"amount": 15,
"type": "PERCENTAGE"
\}
]
\}
],

```
    {
    "cabinld": 10174571,
    "numberOfFreeCabins": 1,
    "prices": {
        "currency": "EUR",
        "price1": "280.00000",
        "price2": "200.00000",
        "discounts": [
            {
                "discountItemId": 1525416,
                "amount": 15,
                "type": "PERCENTAGE"
            }
        ]
        }
        }
    ]
    },
    {
    "periodFrom": "08.08.2019",
    "periodTo": "15.08.2019",
    "freeCabins": [
    {
        "cabinld": 10279571,
        "numberOfFreeCabins": 2,
        "prices": {
            "currency": "EUR",
            "price1": "200.00000",
            "price2": "150.00000",
            "discounts": [
            {
                "discountItemId": 1525416,
                "amount": 15,
                "type": "PERCENTAGE"
            }
        ]
        }
    },
    {
    "cabinld": 10174571,
    "numberOfFreeCabins": 1,
    "prices": {
```

```
        "currency": "EUR",
        "price1": "280.00000",
        "price2": "200.00000",
        "discounts": [
        {
            "discountItemId": 1525416,
            "amount": 15,
            "type": "PERCENTAGE"
        }
        ]
        }
        }
    ]
    }
    ]
}
```

# RestFreeCabinPackageList 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| status | String |  |
| errorCode | Number | Displays only if error occurred |
| freeCabinPackages | Array of RestFreeCabinPackage |  |

## Example

```
{
    "status": "OK",
    "freeCabinPackages": [
    {
        "packageld": 10234055,
        "cabinPackagePeriods": [
        {
            "periodFrom": "01.08.2019",
            "periodTo": "08.08.2019",
            "freeCabins": [
            {
            "cabinId": 10279571,
            "numberOfFreeCabins": 2,
```

```
        "prices": {
        "price1": "200.00000",
        "price2": "150.00000",
        "discounts": [
            {
                "discountItemId": 1525416,
                "amount": 15,
                "type": "PERCENTAGE"
            }
        ]
    }
    },
    {
    "cabinId": 10174571,
    "numberOfFreeCabins": 1,
    "prices": {
        "price1": "280.00000",
        "price2": "200.00000",
        "discounts": [
            {
                "discountItemId": 1525416,
                "amount": 15,
                "type": "PERCENTAGE"
            }
        ]
    }
    }
    ]
    },
    {
    "periodFrom": "08.08.2019",
    "periodTo": "15.08.2019",
    "freeCabins": [
    {
        "cabinId": 10279571,
        "numberOfFreeCabins": 2,
        "prices": {
            "price1": "200.00000",
            "price2": "150.00000",
            "discounts": [
                {
```

<!-- Pages 211 - 220 -->

```
        "discountItemId": 1525416,
        "amount": 15,
        "type": "PERCENTAGE"
        }
        ]
    }
    },
    {
    "cabinId": 10174571,
    "numberOfFreeCabins": 1,
    "prices": {
        "price1": "280.00000",
        "price2": "200.00000",
        "discounts": [
            {
                "discountItemId": 1525416,
                "amount": 15,
                "type": "PERCENTAGE"
            }
            ]
        }
        }
    ]
    }
    ]
    },
    {
    "packageId": 10311851,
    "cabinPackagePeriods": [
    {
        "periodFrom": "22.07.2019",
        "periodTo": "04.08.2019",
        "freeCabins": [
            {
            "cabinId": 10279571,
            "numberOfFreeCabins": 2,
            "prices": {
            "price1": "1000",
            "price2": "800",
            "discounts": [
```

```
        {
            "discountItemId": 1525416,
            "amount": 15,
            "type": "PERCENTAGE"
            }
        ]
        }
        },
        {
        "cabinId": 10174571,
        "numberOfFreeCabins": 1,
        "prices": {
            "price1": "1300",
            "price2": "1000",
            "discounts": [
                {
                    "discountItemId": 1525416,
                    "amount": 15,
                    "type": "PERCENTAGE"
                }
                ]
            }
            }
            }
        ]
        }
        ]
    }
    ]
}
```

# RestFreeCabinPackagePeriod 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| periodFrom | Date |  |
| periodTo | Date |  |
| freeCabins | Array of RestFreeCabin |  |

## Example 1

```
{
    "periodFrom": "01.08.2019",
    "periodTo": "08.08.2019",
    "freeCabins": [
        {
            "cabinId": 10279571,
            "numberOfFreeCabins": 2,
            "prices": {
            "currency": "EUR",
            "price1": "200.00000",
            "price2": "150.00000",
            "discounts": [
                {
                "discountItemId": 1525416,
                "amount": 15,
                "type": "PERCENTAGE"
                }
            ]
        }
    },
    {
        "cabinId": 10174571,
        "numberOfFreeCabins": 1,
        "prices": {
            "currency": "EUR",
            "price1": "280.00000",
            "price2": "200.00000",
            "discounts": [
                {
                "discountItemId": 1525416,
                "amount": 15,
                "type": "PERCENTAGE"
                }
            ]
        }
    }
    ]
}
```

# RestFreeCabinPackageSearchCriteria 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| status | String |  |
| errorCode | Number | Displays only if error occurred |
| countries | Array of Long |  |
| regions | Array of Long |  |
| locations | Array of Long |  |
| packages | Array of Long |  |

## Example

```
{
    "status": "OK",
    "countries": "1",
    "regions": [
        "512259",
        "557576",
        "557577",
        "557579",
        "557580"
    ],
    "locations": [
        "53",
        "51",
        "68",
        "70",
        "61",
        "55",
        "54",
        "5168287",
        "57"
    ],
    "packages": "10311851"
}
```

## RestFreeCabinPackageSearchRequest

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| credentials | RestAuthentication |  |
| periodFrom | Date |  |
| periodTo | Date |  |
| countries | Array of Long | Contains wanted countries id |
| regions | Array of Long | Contains wanted regions id |
| locations | Array of Long | Contains wanted locations id |
| packages | Array of Long | Contains wanted charter packages id |
| ignoreOptions | Boolean | When true, result will include packages <br> under options. Can be used to place <br> waiting options |
| currency | String | preferred currency for prices defined in <br> ISO 4217 currency code (EUR, GBP..) |
| extendedDataSet | String | Options: OBLIGATORY_SERVICES - <br> Include obligatory extras in response |
| numberOfGuests | Integer | Number of guests |

# Example 

```
{
"credentials": {
    "username": "xxx@xxxx",
    "password": "xxxxxxxxxx"
},
"periodFrom": "01.08.2019",
"periodTo": "10.08.2019",
"locations": [],
"countries": [1],
"regions": [],
"packages": [],
"currency": "EUR"
}
```

## RestFreeYacht

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| periodFrom | Date |  |
| periodTo | Date |  |
| checkIn | Date | Check In Time |
| checkOut | Date | Check Out Time |

| yachtld | Long |  |
| :--: | :--: | :--: |
| locationFromld | Long | location id of starting base <br> Relates to Catalogue endpoint All charter bases |
| locationTold | Long | location id of ending base <br> Relates to Catalogue endpoint All charter bases |
| price | RestYachtReservationPriceInfo |  |
| paymentPlans | RestPaymentPlan |  |
| obligatoryExtras | RestYachtReservationService |  |
| additionalExtras | List $<$ RestYachtReservationExtra> | filled when additional extras are requested |
| status | String | possible values: "FREE", "UNDER_OPTION" - used for placing waiting option |
| optionValidTill | Date | represents option expiration date for status "UNDER_OPTION" |
| totalPriceWithExtras | String | total price to be paid in advance by the Agency to the Fleet operator including discounts and all extras marked as advance payment |

# Example 

```
{
    "periodFrom": "23.05.2015",
    "periodTo": "30.05.2015",
"checkIn": "17",
    "checkOut": "08",
    "yachtId": 101949,
    "locationFromId": 55,
    "locationToId": 55,
    "price": {
        "priceListPrice": "5250.00",
        "clientPrice": "5250.00",
        "currency": "EUR"
    },
    "paymentPlans": [
        {
            "date": "23.01.2015",
            "percentage": 30
        },
        {
            "date": "01.05.2015",
            "percentage": 70
```

```
    }
    ],
"obligatoryExtras": [
    {
        "amount": "150.00",
        "calculationType": "ADVANCE_PAYMENT",
        "condition": {},
        "currency": "EUR",
        "listPrice": "150.00",
        "priceMeasureId": 54,
        "quantity": "1.00",
        "serviceId": 65212
    },
    {
        "amount": "15.00",
        "calculationType": "ADVANCE_PAYMENT",
        "condition": {},
        "currency": "EUR",
        "listPrice": "15.00",
        "priceMeasureId": 54,
        "quantity": "1.00",
        "serviceId": 214452
    }
    ]
}
```

# RestFreeYachtList 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| status | String |  |
| errorCode | Number | Displays only if error occurred |
| periodFrom | Date |  |
| periodTo | Date |  |
| freeYachts | Array of RestFreeYacht |  |

## Example

```
{
    "status": "OK",
```

```
"periodFrom": "23.05.2015",
"periodTo": "30.05.2015",
"freeYachts": [
    {
        "periodFrom": "23.05.2015",
        "periodTo": "30.05.2015",
        "yachtId": 302,
        "locationFromId": 55,
        "locationToId": 55,
        "price": {
            "priceListPrice": "3350.00",
            "clientPrice": "3350.00"
        }
    },
    {
        "periodFrom": "23.05.2015",
        "periodTo": "30.05.2015",
        "yachtId": 101949,
        "locationFromId": 55,
        "locationToId": 55,
        "price": {
            "priceListPrice": "5250.00",
            "clientPrice": "5250.00"
        }
    },
    {
        "periodFrom": "23.05.2015",
        "periodTo": "30.05.2015",
        "yachtId": 101949,
        "locationFromId": 55,
        "locationToId": 55,
        "price": {
            "priceListPrice": "5250.00",
            "clientPrice": "5250.00"
        },
        "paymentPlans": [
            {
                "date": "23.01.2015",
                "percentage": 30
            },
```

```
        {
            "date": "01.05.2015",
            "percentage": 70
        }
        ]
    }
    }
}
```

# RestFreeYachtsRequest 

## Definition

| Field | Type | Description |
| :--: | :--: | :--: |
| credentials | RestAuthentication |  |
| periodFrom | Date | Dates passed in the request need to follow booking constraints for a boat. Booking constraint rules can be found in RestYacht under checkInPeriods which is an array of RestYachtCheckInPeriod. e.g. Most of the boats in the system are bookable from Saturday to Saturday (SAT-SAT) so the request dates for one week booking would need to correspond to two next consecutive Saturdays. |
| periodTo | Date | Dates passed in the request need to follow booking constraints for a boat. Booking constraint rules can be found in RestYacht under checkInPeriods which is an array of RestYachtCheckInPeriod. e.g. Most of the boats in the system are bookable from Saturday to Saturday (SAT-SAT) so the request dates for one week booking would need to correspond to two next consecutive Saturdays. |
| priceFrom | Number |  |
| priceTo | Number |  |
| yachts | Array of Long | Contains yachts id |
| orderby | Number | 1 - base 2 - price 3 - yacht length 4 - yacht cabins 5 - yacht build year |
| desc | Number | 0 - ascending 1 - descending |
| ignoreAvailability | Boolean | true or false |
| periods | Array of Period | Used to send multiple periods in one request instead of sending multiple requests with a single period. When used, periodFrom and periodTo are ignored |
| includeExtendedDataSet | Boolean | Flag for export payment plans in response. Use true or false. *this flag is deprecated please use extendedDataSet |

| extendedDataSet | String | List of extended data types separated by comma. Possible types: PAYMENT_PLAN, OBLIGATORY_SERVICES, ADDITIONAL_EXTRAS. <br> When requesting OBLIGATORY_SERVICES, they will be exported only if one yacht and one period are requested, otherwise it will be ignored <br> When requesting with parameter "extendedDataSet": <br> "ADDITIONAL_EXTRAS" without any serviceIDs or equipmentIDs, you will get all additional extras possible for that period. Those additional extras will not b e added into the total price with extras. Only obligatory extras will be included in the total price with extras. Returned extras IDs will be the ones form seasonS pecificData of the boat, and you can use them in Create info requests. <br> When requesting with parameter "extendedDataSet": <br> "ADDITIONAL_EXTRAS" with serviceIDs or equipmentIDs included, you will get only those extras in the response and they wil I be included in the total price with extras. Returned extras IDs are virtual ca n not be used in subsequent Create info requests. <br> When requesting without the "extendedDataSet": <br> "ADDITIONAL_EXTRAS" parameter, you wi ll not get any additional extras in the response. |
| :--: | :--: | :--: |
| ignoreOptions | Boolean | When true, result will include periods under options. Can be used to place waiting options |
| serviceIDs | Array of Long | When extendedDataSet contains ADDITIONAL_EXTRAS, use this parameter to specify extra services you want included in the price. It is required to specify an array of extra IDs ( serviceld ) found in seasonSpecificData of the boat |
| equipmentIDs | Array of Long | When extendedDataSet contains ADDITIONAL_EXTRAS, use this parameter to specify extra equipment you want included in the price. It is required to specify an array of extra IDs ( equipmentl d ) found in seasonSpecificData of the boat |
| currency | String | currency in form EUR,HRK,USD etc... |

*includeExtendedDataSet is deprecated please use extendedDataSet.

```
Example
{
"credentials":("username":"xxx@xxxxx","password":"xxxxxxxxxx"),
    "periodFrom":"23.05.2015",
    "periodTo":"30.05.2015",
    "yachts":[302,101949,101723]
}
```

<!-- Pages 221 - 230 -->

Example 2
\{
"credentials": \{
"username": "xxx@xxxxx",
"password": "xxxxxxxxxx"
\},
"yachts": [
302,
101949,
101723
],
"periods": [
\{
"periodFrom": "17.07.2021",
"periodTo": "24.07.2021"
\},
\{
"periodFrom": "14.07.2021",
"periodTo": "31.07.2021"
\},
\{
"periodFrom": "31.07.2021",
"periodTo": "07.08.2021"
\},
\{
"periodFrom": "07.08.2021",
"periodTo": "14.08.2021"
\},
\{
"periodFrom": "14.08.2021",
"periodTo": "21.08.2021"
\}
]
\}

Example 3
(

```
    "credentials": {
    "username": "xxx@xxxxx",
    "password": "xxxxxxxxxx"
    },
    "yachts": [
        302
    ],
    "periods": [
        {
            "periodFrom": "17.07.2021",
            "periodTo": "24.07.2021"
        }
    ],
"extendedDataSet":"OBLIGATORY_SERVICES,PAYMENT_PLAN"
}
```

# RestFreeYachtsSearchCriteria 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| countries | Array of Long |  |
| regions | Array of Long |  |
| locations | Array of Long |  |
| yachtBuilders | Array of Long |  |
| yachtCategories | Array of Long |  |
| equipments | Array of Long |  |
| sailTypes | Array of Long |  |

## Example

```
{"status": "OK",
    "countries": [
        1,
        100143,
        100174,
        100119
    ],
    "regions": [
        555430,
        555308,
        555373
    ],
    "locations": [
        972887,
        482314,
        482315,
        1
    ],
    "yachtBuilders": [
        832736,
        1,
        100330,
        515208,
        112740
    ],
    "yachtCategories": [
        102,
        51,
        120895,
        1
    ],
    "equipment": [
        1,
        2,
        3,
        933728,
        4
    ],
    "sailTypes": [
        1,
        3,
        4,
        112782
    ]
}
```

# RestFreeYachtsSearchRequest 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| credentials | RestAuthentication |  |
| periodFrom | Date |  |
| periodTo | Date |  |
| countries | Array of Long | Contains wanted countries id |
| regions | Array of Long | Contains wanted regions id |
| locations | Array of Long | Contains wanted locations id |
| charterCompanies | Array of Long | Contains wanted charter companies id |
| yachtCategories | Array of Long | Contains wanted yacht categories id |
| yachtModels | Array of Long | Contains wanted yacht models id |

| yachtBuilders | Array of Long | Contains wanted yacht builders id |
| :--: | :--: | :--: |
| equipments | Array of Long | Contains wanted equipments id |
| sailType | Long |  |
| cabins | Array of Number |  |
| wc | Array of Number |  |
| resultsPerPage | Number | Sets the number of results shown on each page in the response. If not set in the request, it defaults to 10 . |
| resultsPage | Number | Sets the page number to be displayed. |
| lengthFrom | Number |  |
| lengthTo | Number |  |
| persons | Array of Number |  |
| rentType | String | RENT or ACCOMMODATION |
| orderby | Number | 1 - base 2 - price 3 - yacht length <br> 4 - yacht cabins 5 - yacht build year |
| desc | Number | 0 - ascending 1 - descending |
| buildYearFrom | Number |  |
| buildYearTo | Number |  |
| boatType | String | BAREBOAT or CREWED |
| includeExtendedDataSet | Boolean | Flag for export payment plans in response. Use true or false *this flag is deprecated please use extendedDataSet |
| extendedDataSet | String | List of extended data types separated by comma. Possible types: PAYMENT_PLAN |
| ignoreOptions | Boolean | When true, result will include yachts under options. Can be used to place waiting options |
| bookingTypes | Array of String | possible values: BAREBOAT, CREWED |
| currency | String | currency in form EUR,HRK,USD etc... |

*includeExtendedDataSet is deprecated please use extendedDataSet.

# Example 

```
{
    "credentials": {
        "username":"xxx@xxxx",
        "password":"xxxxxxxxxx"
    },
    "periodFrom":"04.11.2016",
    "periodTo":"04.11.2016",
    "countries":[1],
"extendedDataSet": "PAYMENT_PLAN",
"resultsPerPage":5,
"resultsPage":2,
"currency": "EUR"
}
```

## RestFreeYachtsSearchResponse

# Definition 

| Field | Type | Description |
| :-- | :-- | :-- |
| status | String |  |
| errorCode | Number | Displays only if error occurred |
| from | Date | search period from |
| to | Date | search period to |
| totalCount | Number | total count of results |
| totalPages | Number | total count of pages |
| currentPage | Number | current search page |
| resultsPerPage | Number | number of results per page defined in Re <br> stFreeYachtsRequest |
| startIdx | Number | index of the first result in current page |
| endIdx | Number | index of the last result in current page |
| freeYachtsInPeriod | Array of RestFreeYacht |  |

## Example

```
{
    "status": "OK",
    "from": "04.06.2016",
    "to": "11.06.2016",
    "totalCount": 1173,
    "totalPages": 235,
    "currentPage": 1,
    "resultsPerPage": 5,
    "startIdx": 0,
    "endIdx": 4,
    "freeYachtsInPeriod": [
        {
            "periodFrom": "04.06.2016",
            "periodTo": "11.06.2016",
            "yachtId": 557323,
            "locationFromId": 53,
            "locationToId": 53,
            "price": {
            "priceListPrice": "3300.00",
            "clientPrice": "2805.00",
            "discounts": [
                {
                    "discountItemId": 1,
                    "amount": 15.00,
                    "type": "PERCENTAGE"
                }
            ]
        }
    },
    {
        "periodFrom": "04.06.2016",
        "periodTo": "11.06.2016",
        "yachtId": 946036,
        "locationFromId": 53,
        "locationToId": 53,
        "price": {
            "priceListPrice": "3542.00",
            "clientPrice": "3542.00"
        }
    },
    {
```

```
        "periodFrom": "04.06.2016",
        "periodTo": "11.06.2016",
        "yachtId": 828340,
        "locationFromId": 53,
        "locationTold": 53,
        "price": {
            "priceListPrice": "2890.00",
            "clientPrice": "2456.50",
            "discounts": [
                {
                    "discountItemId": 1,
                    "amount": 15.00,
                    "type": "PERCENTAGE"
                }
            ]
        }
    ],
    {
        "periodFrom": "04.06.2016",
        "periodTo": "11.06.2016",
        "yachtId": 120098,
        "locationFromId": 53,
        "locationTold": 53,
        "price": {
            "priceListPrice": "2200.00",
            "clientPrice": "1870.00",
            "discounts": [
                {
                    "discountItemId": 1,
                    "amount": 15.00,
                    "type": "PERCENTAGE"
                }
            ]
        }
    ],
    {
        "periodFrom": "04.06.2016",
        "periodTo": "11.06.2016",
        "yachtId": 1044977,
        "locationFromId": 53,
        "locationTold": 53,
        "price": {
            "priceListPrice": "2300.00",
            "clientPrice": "1955.00",
            "discounts": [
                {
                    "discountItemId": 1,
                    "amount": 15.00,
                    "type": "PERCENTAGE"
                }
            ]
        },
        "paymentPlans": [
            {
                "date": "01.04.2016",
                "percentage": 30
            },
            {
                "date": "20.06.2016",
                "percentage": 70
            }
        ]
    ]
}
```

# RestGetContactsRequest 

| Field | Type | Description | Required |
| :-- | :-- | :-- | :-- |

| credentials | RestAuthentication | user credentials (username, <br> password) | yes |
| :-- | :-- | :-- | :-- |
| ids | Array of Long | array of user ids (optional) | no |
| modifyTimeFrom | String | format dd.MM.yyyy HH:mm | no |
| modifyTimeTo | String | format dd.MM.yyyy HH:mm | no |
| email | String | example@example.com | no |
| contactRoleIds | Array of Long | array of contact role ids | no |

```
{
    "credentials":[
        "username": "username",
        "password": "password"
    ],
    "ids":[
        1,
        2,
        3
    ],
    "modifyTimeFrom": "31.01.2021 00:00",
    "modifyTimeTo": "31.12.2021 14:00",
    "email": "example@example.com",
    "contactRoleIds": [
        101,
        102,
        103
    ]
}
```

# RestGroupPolicy 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long |  |
| name | String |  |
| domainld | Long | Relates to Catalogue endpoint All <br> domains |
| domainName | String |  |

## Example

```
{
    "id": 2078327,
    "name": "test policy",
    "domainld": 1201,
    "domainName":"Test Charter Company"
}
```

## RestInternationalText

| Field | Type | Description |
| :-- | :-- | :-- |

| textDE | String |  |
| :-- | :-- | :-- |
| textEN | String |  |
| textHR | String |  |
| textIT | String |  |
| textSI | String |  |
| textRU | String |  |
| textCZ | String |  |
| textFR | String |  |
| textPL | String |  |
| textSK | String |  |
| textNL | String |  |
| textES | String |  |

# Example 

```
{
    "textDE":"Frühbuchung",
    "textEN":"Early booking",
    "textHR":"Rani buking",
    "textIT":"Prenota Prima",
    "textSI":"Zgodnja rezervacija",
"textRU":"Ranneye bronirovaniye",
"textCZ":"Brzká rezervace",
"textFR":"Réservation anticipée",
"textPL":"Wczesna rezerwacja",
"textSK":"Skorá rezervácia",
"textNL":"Vroegboeking",
"textES":"Reserva anticipada"
}
```

## RestInvoice

Description

| Field | Type | Description |
| :-- | :-- | :-- |
| type | String | Possible types: 1-Final or 2-Advanced <br> Payment Invoice |
| number | String | Invoice number |
| reservationnumber | String |  |
| modifyTime | String |  |
| client | String | Client or Company name |
| clientvatcode | String | OIB / VAT id |
| clientaddress | String |  |
| clientzipcode | String |  |
| clientcity | String |  |
| clientcountry | String |  |
| clientid | String | NauSYS ID of the client |
| partner | String | Agency or Company name |

|  partnervatcode | String | OIB / VAT id  |
| --- | --- | --- |
|  partneraddress | String |   |
|  partnerzipcode | String |   |
|  partnercity | String |   |
|  partnercountry | String | Partner country name as String without ID  |
|  partnerid | String | NauSYS ID of the partner  |
|  guestname | String | Guest name if the invoice is made out to the Agency  |
|  altcurrency | String | Invoice currency (ISO code)  |
|  resource | String | Boat name  |
|  resourcetype | String | Boat model  |
|  resourcecode | String | NauSYS ID of the boat  |
|  totalaltprice | String | Total invoice amount with tax in local currency  |
|  totalaltpricewithouttax | String | Total invoice amount without tax in local currency  |
|  totalalttax | String | Total tax amount in local currency  |
|  basefrom | String |   |
|  baseto | String |   |
|  version | String | Document revision  |
|  alreadytransferred | Boolean | Currently not in use  |
|  issuedto | String | Indicates whether the invoice is issued to Client or Partner  |
|  paymentMethod | String | (bank transfer, credit card, voucher, cash, ...)  |
|  vat | RestInvoiceVat |   |
|  items | RestInvoiceltems |   |
|  client2 | RestClient |   |
|  partner2 | RestClient |   |

# RestInvoiceltem

## Definition

|  Field | Type | Description  |
| --- | --- | --- |
|  id | Long | NauSYS Product ID  |
|  ident | String | Ident / Product code  |
|  identname | String |   |
|  currency | String | Local currency  |
|  altcurrency | String |   |

| currencyrate | String | Exchange rate |
| :-- | :-- | :-- |
| totalpricewithouttax | String | Total Item Amount without tax in local <br> currency |
| vatrate | String | Tax rate in percentage |
| totalaltpricewithouttax | String | Total Item Amount without tax in <br> alternate currency |
| totalalttax | String | Total tax amount in local currency |
| totalaltpricewithtax | String | Total Item Amount with tax in local <br> currency |
| totalaltdiscount | String | Total discount amount in local currency |
| quantity | String | Price per unit without tax before <br> discount (list price) |
| singlepricewithouttax | String | Agency discount amount from <br> commission |
| agencydiscountrate | String |  |

# RestInvoiceltemDiscount 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| level | Long | Discount level |
| name | String | Discount name |
| type | String | Discount type ( PERCENTAGE / AMOUNT ) |
| amount | String | Discount amount in local currency ( can <br> be PERCENTAGE or AMOUNT ) |
| altamount | String | Discount amount in alternate currency ( <br> can be PERCENTAGE or AMOUNT ) |

## RestInvoiceltemDiscounts

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| discounts | array of RestInvoiceltemDiscount |  |

## RestInvoiceltems

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| items | array of RestInvoiceltem |  |

## RestInvoicesExport

<!-- Pages 231 - 240 -->

# Definition 

| Field | Type | Description |
| :-- | :-- | :-- |
| invoices | array of RestInvoice |  |
| summary | array of RestInvoiceSummary |  |

## Example:

```
{
    "invoices": [
    {
        "alreadytransferred": false,
        "altcurrency": "EUR",
        "basefrom": "101161",
        "baseto": "101161",
        "client": "Martine Hüabl",
        "client2": {
            "address": "Walpersbach 3055",
            "city": "Walpersbach",
            "company": true,
            "countryld": 100102,
            "externalld": "375866",
            "ld": 3723161,
            "name": "Martine",
            "surname": "Hüabl",
            "zip": "2822"
    },
    "clientaddress": "Walpersbach 3055",
    "clientcity": "Walpersbach",
    "clientcountry": "Austrija",
    "clientid": "3723161",
    "clientzipcode": "2822",
    "date": "2023-07-15",
    "guestname": "Martine Hüabl",
    "issuedto": "1",
    "items": {
        "items": [
            {
                "agencydiscountrate": "0.00",
            "altcurrency": "EUR",
            "currency": "EUR",
            "currencyrate": "1.000000",
            "discounts": {
                "discounts": [
                    {
                        "altamount": "829.65",
                        "amount": "15.00",
                        "level": "1",
                        "name": "Rani buking",
                        "type": "PERCENTAGE"
            },
            {
                "altamount": "235.07",
                "amount": "5.00",
                "level": "2",
                "name": "Yachtclub popust",
                "type": "PERCENTAGE"
            }
        }
    },
    "id": "968578",
    "ident": "BOOK",
    "identname": "Smještaj na plovilu",
    "quantity": "1.00",
    "singlepricewithouttax": "4466.25",
    "totalaltdiscount": "1064.72",
    "totalaltpricewithouttax": "4466.25",
```

```
    "totalaltpricewithtax": "5046.86",
    "totalalttax": "580.61",
    "totalpricewithouttax": "5530.970000",
    "vatrate": "13.00"
    }
    }
},
"modifyTime": "14.07.2023 08:31:27",
"number": "1054-2-2",
"partner": "Pitter Gesellschaft m.b.H.",
"partner2": {
    "address": "Raimund-Obendrauf-Straße 30 ",
    "city": "Hartberg",
    "company": true,
    "countryId": 100102,
    "email": "inhehe@example.com",
    "id": 468271,
    "name": "Pitter Gesellschaft m.b.H.",
    "phone": "+43 3332 66240
Skype: ycpitterinfo",
    "skype": "susanne_example",
    "vatNr": "ATU 58435455",
    "zip": "A-8223"
},
"partneraddress": "Raimund-Obendrauf-Straße 30 ",
"partnercity": "Hartberg",
"partnercountry": "Austrija",
"partnerid": "468271",
"partnervatcode": "ATU 58461355",
"partnerzipcode": "A-8230",
"paymentMethod": "T",
"reservationnumber": "89807657",
"resource": "Relax",
"resourcecode": "1051506",
"resourcetype": "Nautitech 40 Open - 4 + 2 cab.",
"totalaltprice": "5046.86",
"totalaltpricewithouttax": "4466.25",
"totalalttax": "580.61",
"type": "1",
"vat": {
    "items": [
        {
            "basealt": "4466.25",
            "rate": "13.00",
            "totalalt": "580.61"
        }
        ]
    },
    "version": "6"
    }
],
"summary": {
    "apiCount": 0,
    "fiCount": 1,
    "sapiCount": 0,
    "sfiCount": 0,
    "totalCount": 1
}
}
```

# RestInvoicesRequest 

Definition:

| Field | Type | Description | Necessity |
| :-- | :-- | :-- | :-- |
| credentials | RestAuthentication |  | required |
| periodFrom | String |  | required if modifyFrom/To is <br> not specified |
| periodTo | String |  | required if modifyFrom/To is <br> not specified |

| modifyFrom | String | required if periodFrom/To is <br> not specified |
| :-- | :-- | :-- |
| modifyTo | String | required if periodFrom/To is <br> not specified |

# Example: 

$\{$
"credentials" : \{"username":"\$\{USERNAME\}","password":"\$\{PASSWORD\}"\},
"periodFrom":"01.01.2024",
"periodTo":"17.01.2024"
\}

## RestInvoiceSummary

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| apiCount | Integer |  |
| sapiCount | Integer |  |
| fiCount | Integer |  |
| sfiCount | Integer |  |
| totalCount | Integer |  |

## RestInvoiceVat

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| items | array of RestInvoiceVatItem |  |

## RestInvoiceVatItem

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| rate | String | Tax rate in percents |
| basealt | String | Tax base amount |
| totalalt | String | Total tax amount |

## RestLocation

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long |  |
| name | RestInternationalText |  |

| lon | Decimal | longitude for location of base |
| :-- | :-- | :-- |
| lat | Decimal | latitude for location of base |
| regionld | Long | ID of the region to which location <br> belongs. <br> Relates to Catalogue endpoint All <br> regions |

# Example 

```
{
    "id": 845444,
    "name": {
        "textDE": "Yerseke",
        "textEN": "Yerseke",
        "textHR": "Yerseke",
        "textIT": "Yerseke",
        "textSI": "Yerseke"
    },
    "lon": 4.054730,
    "lat": 51.496930,
    "regionld": 845443
    }
```

## RestLocationList

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| status | String |  |
| errorCode | Number | Displays only if error occurred |
| locations | Array of RestLocation |  |

## Example

```
{"status": "OK",
    "locations": [
        {"id": 482449,
            "name": {"textDE": "Abacos",
                "textEN": "Abacos",
                "textHR": "Abacos",
                "textIT": "Abacos",
                "textSI": "Abacos"
            },
            "lon": -77.143680,
            "lat": 26.359880,
            "regionId": 555307
        },
        {
            "id": 68,
            "name": {
                "textDE": "ACI Marina Cres",
                "textEN": "ACI Marina Cres",
                "textHR": "ACI Marina Cres",
                "textIT": "ACI Marina Cres",
                "textSI": "ACI Marina Cres"
            },
            "lon": 14.414060,
            "lat": 44.944880,
            "regionId": 557576
        }
    ]
}
```

# RestMergeClientRequest 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| credentials | RestAuthentication | required |
| sourceId | Long | required, id of contact that is merged <br> from |
| targetld | Long | required, id of contact that is merged to |

## Example

```
{
    "credentials": {
    "username":"rest@xxxxx",
"password":"xxxxxxxxxx"
    },
    "sourceId": 1912634,
    "targetId": 1911907,
}
```

## RestOccupancyList

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| status | String |  |
| errorCode | Number | Displays only if error occurred |

| occupancy | Array of RestCabinCharterOccupancy |
| :-- | :-- |

# Example 

\{
"status": "OK",
"occupancy": [
\{
"packageld": 10234055,
"rows": [
\{
"periodFrom": "01.08.2019",
"periodTo": "08.08.2019",
"cabinOccupancy": [
\{
"cabinDefinitionId": 10279571,
"availableNumberOfCabins": 2,
"maximumNumberOfCabins": 2,
"numberOfOptions": 0
\},
\{
"cabinDefinitionId": 10174571,
"availableNumberOfCabins": 1,
"maximumNumberOfCabins": 1,
"numberOfOptions": 0
\}
]
$\}$
$\{$
"periodFrom": "08.08.2019",
"periodTo": "15.08.2019",
"cabinOccupancy": [
\{
"cabinDefinitionId": 10279571,
"availableNumberOfCabins": 2,
"maximumNumberOfCabins": 2,
"numberOfOptions": 0
$\}$
\{
"cabinDefinitionId": 10174571,
"availableNumberOfCabins": 1,
"maximumNumberOfCabins": 1,

```
        "numberOfOptions": 0
        }
        ]
    }
    }
    }
    },
    {
    "packageld": 10311851,
    "rows": [
        {
            "periodFrom": "22.07.2019",
            "periodTo": "04.08.2019",
            "cabinOccupancy": [
            {
            "cabinDefinitionId": 10279571,
            "availableNumberOfCabins": 2,
            "maximumNumberOfCabins": 2,
            "numberOfOptions": 0
        },
        {
            "cabinDefinitionId": 10174571,
            "availableNumberOfCabins": 1,
            "maximumNumberOfCabins": 1,
            "numberOfOptions": 0
        }
        ]
        }
    ]
    }
    ]
}
```

# RestOneWayPeriod 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long |  |
| periodFrom | Date |  |

| periodTo | Date |  |
| :-- | :-- | :-- |
| baseId | Long | Relates to Catalogue endpoint All charter <br> bases |
| locationId | Long | Relates to Catalogue endpoint All <br> locations |

# Example 

$\{$
"id": 1091672,
"periodFrom": "01.06.2019",
"periodTo": "30.11.2019",
"baseId": 102751,
"locationId": 57
\}

## RestOnlinePaymentPlan

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| credentials | RestAuthentication |  |
| id | Long |  |
| uuid | String |  |
| paymentPlanId | Long |  |
| amount | String |  |
| currency | String |  |
| date | Date |  |
| approvalCode | String |  |

## Example

```
{
    "credentials": {
        "username": "xxx@xxxxx",
        "password": "xxxxxxxxxx"
    },
    "id": 4125752,
    "uuid": "0628d3b6-52fa-4d68-8640-1126c204aed4",
    "paymentPlanId":2361351,
    "amount": "100.00",
    "currency": "EUR",
    "date": "23.10.2015",
    "approvalCode":0
}
```

## RestPassenger

# Definition

|  Field | Type | Description  |
| --- | --- | --- |
|  skipper | Boolean | true or false  |
|  skipperLicence | String |   |
|  vhfLicence | String |   |
|  skipperEmail | String |   |
|  skipperMobile | String |   |
|  name | String |   |
|  surname | String |   |
|  birthDate | Date | in format dd.MM.yyyy  |
|  birthPlace | String | In case of person who is born in Croatia, place of birth must be one from the list of known places in Croatia.
Use "Place name" column, not "Full place name". (List of places in Croatia)  |
|  birthCountry | String | ISO code for country (List of countries)  |
|  nationality | String | ISO code for country (List of countries)  |
|  documentType | String | PASSPORT or IDCARD or OTHER  |
|  documentNumber | String |   |
|  gender | String | MALE or FEMALE  |
|  livingPlace | String | In case of person who is living in Croatia, place of residence (living) must be one from the list of known places in Croatia.
Use "Place name" column, not "Full place name". (List of places in Croatia)  |
|  livingCountry | String | ISO code for country (List of countries)  |
|  disabledPerson | Boolean | true if person is with a disability otherwise false  |
|  shoeSize | String |   |
|  embarkmentDate | Date | in format dd.MM.yyyy  |
|  disembarkmentDate | Date | in format dd.MM.yyyy  |

## Example

```
{
    "skipper":false,
    "name":"URSULA",
    "surname":"EDER",
    "birthDate":"18.02.1964",
    "birthPlace":"Salzburg",
    "birthCountry":"AUT",
    "nationality":"AUT",
    "documentType":"PASSPORT",
    "documentNumber":"P3488147",
    "gender":"FEMALE",
    "livingPlace":"Graz",
```

"livingCountry":"AUT", "disabledPerson":false , "shoeSize":"34", "embarkmentDate":"01.02.2023", "disembarkmentDate":"05.02.2023" }

# RestPayment

|  Field | Type | Description  |
| --- | --- | --- |
|  amount | String | amount is in currency defined in this
request  |
|  currency | String |   |
|  date | String | pattern dd.MM.yyyy  |
|  paymentMethod | String |   |
|  approvalCode | String |   |
|  paymentMethod possible values |  |   |
|  BANK_TRANSFER | Bank transfer |   |
|  CASH | Paper money / coins |   |
|  CREDIT_CARD | Credit card |   |
|  CHECQUE | Checque |   |
|  OTHER | Other |   |

## Example

```
{
"amount":"100",
    "currency":"EUR",
    "date":"03.09.2015",
    "paymentMethod":"CREDIT_CARD",
    "approvalCode":"XXX"}
```

## RestPaymentPlan

|  Field | Type | Description  |
| --- | --- | --- |
|  date | Date | Due date of payment plan  |
|  percentage | Decimal | Percentage of total amount to be paid  |

## Example

[ "date": "23.01.2015", "percentage": 30.00

## RestPriceList

<!-- Pages 241 - 250 -->

# Definition 

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long |  |
| type | String | DAILY or WEEKLY |
| currency | String |  |
| columns | Array of RestPriceListColumn |  |
| rows | Array of RestPriceListRow |  |
| seasonld | Long |  |
| locationsld | Array of Long | Represent a list of locations where the <br> price list applies. If field is empty(null) or <br> does not exist, this means it applies to <br> all locations defined in season(if <br> defined). If the field is not empty then <br> price list is applied only on defined <br> locations, and it also has a higher <br> priority than a price list without defined <br> locations. |

## Example

```
{
    "id": 570165,
    "type": "WEEKLY",
    "currency": "EUR",
    "columns": [
        {
            "periods": [
            {
                "periodFrom": "01.01.2015",
                "periodTo": "24.04.2015"
            },
            {
                "periodFrom": "24.10.2015",
                "periodTo": "31.12.2015"
            }
        ]
    },
    {
        "periods": [
            {
                "periodFrom": "03.10.2015",
                "periodTo": "23.10.2015"
            },
```

```
        {
            "periodFrom": "25.04.2015",
            "periodTo": "15.05.2015"
        }
    ]
},
{
    "periods": [
        {
            "periodFrom": "16.05.2015",
            "periodTo": "29.05.2015"
        },
        {
            "periodFrom": "19.09.2015",
            "periodTo": "02.10.2015"
        }
    ]
},
{
    "periods": [
        {
            "periodFrom": "30.05.2015",
            "periodTo": "19.06.2015"
        },
        {
            "periodFrom": "05.09.2015",
            "periodTo": "18.09.2015"
        }
    ]
},
{
    "periods": [
        {
            "periodFrom": "20.06.2015",
            "periodTo": "03.07.2015"
        },
        {
            "periodFrom": "22.08.2015",
            "periodTo": "04.09.2015"
        }
```

```
        ]
    },
    {
        "periods": [
            {
                "periodFrom": "04.07.2015",
                "periodTo": "24.07.2015"
            }
        ]
    },
    {
        "periods": [
            {
                "periodFrom": "25.07.2015",
                "periodTo": "21.08.2015"
            }
        ]
    }
],
"rows": [
    {
        "yachtId": 579274,
        "prices": [
            "2100",
            "2740",
            "3610",
            "4020",
            "4640",
            "4990",
            "5360"
        ]
    },
    {
        "yachtId": 479895,
        "prices": [
            "1600",
            "2160",
            "2580",
            "2990",
            "3500",
```

```
        "3700",
        "3900"
        ]
    },
    {
        "yachtId": 116266,
        "prices": [
            "1600",
            "2160",
            "2580",
            "2990",
            "3500",
            "3700",
            "3900"
        ]
    }
    ],
    "seasonId": 570164,
    "locationsId": [
        68,
        51
    ]
}
```

# RestPriceListColumn 

| Field | Type | Description |
| :-- | :-- | :-- |
| periods | Arrays of RestPriceListPeriod |  |

## Example

```
{
    "periods" : [{
            "periodFrom" : "01.01.2014",
            "periodTo" : "18.04.2014"
        }
    ]
}, {
    "periods" : [{
                                "periodFrom" : "19.04.2014",
                                "periodTo" : "02.05.2014"
```

```
        }, {
            "periodFrom" : "27.09.2014",
            "periodTo" : "31.12.2014"
        }
    ]
}, {
    "periods" : [{
            "periodFrom" : "03.05.2014",
            "periodTo" : "23.05.2014"
        }, {
            "periodFrom" : "20.09.2014",
            "periodTo" : "26.09.2014"
        }
    ]
}, {
    "periods" : [{
            "periodFrom" : "24.05.2014",
            "periodTo" : "06.06.2014"
        }, {
            "periodFrom" : "13.09.2014",
            "periodTo" : "19.09.2014"
        }
    ]
}, {
    "periods" : [{
            "periodFrom" : "16.08.2014",
            "periodTo" : "12.09.2014"
        }, {
            "periodFrom" : "07.06.2014",
            "periodTo" : "27.06.2014"
        }
    ]
}, {
    "periods" : [{
            "periodFrom" : "28.06.2014",
            "periodTo" : "15.08.2014"
        }
    ]
}
```

# RestPriceListList 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| status | String |  |
| errorCode | Number | Displays only if error occurred |
| priceLists | Array of RestPriceList |  |

## Example

```
{
    "status": "OK",
    "priceLists": [
        {
            "id": 570165,
            "type": "WEEKLY",
            "columns": [
```

```
    {
        "periods": [
            {
                "periodFrom": "01.01.2015",
                "periodTo": "24.04.2015"
            },
            {
                "periodFrom": "24.10.2015",
                "periodTo": "31.12.2015"
            }
        ]
    }
],
"rows": [
    {
        "yachtId": 579274,
        "prices": [
            "2100",
            "2740",
            "3610",
            "4020",
            "4640",
            "4990",
            "5360"
        ]
    },
    {
        "yachtId": 479895,
        "prices": [
            "1600",
            "2160",
            "2580",
            "2990",
            "3500",
            "3700",
            "3900"
        ]
    }
],
"seasonId": 570164,
```

```
    "currency": "EUR"
},
{
    "id": 831291,
    "type": "WEEKLY",
    "columns": [
        {
            "periods": [
            {
                "periodFrom": "01.01.2015",
                "periodTo": "20.03.2015"
            },
            {
                "periodFrom": "24.10.2015",
                "periodTo": "31.12.2015"
            }
        ]
        },
        {
            "periods": [
            {
                "periodFrom": "21.03.2015",
                "periodTo": "03.04.2015"
            },
            {
                "periodFrom": "10.10.2015",
                "periodTo": "23.10.2015"
            }
        ]
        }
    ],
    "rows": [
        {
            "yachtId": 579268,
            "prices": [
            "1750",
            "2220",
            "2320",
            "2160",
            "2170",
```

```
            "2420"
            ]
        },
        {
            "yachtId": 579269,
            "prices": [
                "1750",
                "2220",
                "2320",
                "2160",
                "2170",
                "2420"
            ]
        }
        ],
        "seasonId": 570164,
        "currency": "EUR",
        "locationsId": [
            68,
            51
        ]
    }
    ]
}
```

# RestPriceListPeriod 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| periodFrom | Date |  |
| periodTo | Date |  |

## Example

```
{
    "periodFrom":"01.01.2014",
    "periodTo":"21.03.2014"
}
```

## RestPriceListRow

| Field | Type | Description |
| :-- | :-- | :-- |
| yachtld | Long |  |

| prices | Array of Number |  |
| :-- | :-- | :-- |

# Example 

\{
"yachtld": 479895,
"prices": [
"1600",
"2160",
"2580",
"2990",
"3500",
"3700",
"3900"
]
\}

## RestPriceMeasure

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long |  |
| name | RestInternationalText |  |

## Example

```
{
    "id": 101767,
    "name": {
        "textDE": "one-way",
        "textEN": "one-way",
        "textHR": "u jednom smjeru",
        "textIT": "un modo",
        "textSI": "v eno smer"
    }
    }
```

## RestPriceMeasureList

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| status | String |  |
| errorCode | Number | Displays only if error occurred |
| priceMeasures | Array of RestPriceMeasure |  |

## Example

```
{
    "status": "OK",
    "priceMeasures": [
        {
            "id": 101767,
            "name": {"textDE": "one-way",
                "textEN": "one-way",
                "textHR": "u jednom smjeru",
                "textIT": "un modo",
                "textSI": "v eno smer"
            }
        },
        {
            "id": 126869,
            "name": {
                "textDE": "one-way / pro Person",
                "textEN": "one-way / person",
                "textHR": "one-way / po osobi",
                "textIT": "one-way / s persona",
                "textSI": "v eno smer / po osobi"
            }
        },
        {
            "id": 485612,
            "name": {
                "textDE": "pro 2 Wochen",
                "textEN": "per 2 weeks",
                "textHR": "2 tjedna",
                "textIT": "da 2 settimane",
                "textSI": "2 tjedna"
            }
        }
    ]
}
```

# RestRegion 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long | ID of the region |
| name | RestInternationalText | name of the region |
| countryld | Long | ID of the country to which region <br> belongs. <br> Relates to Catalogue endpoint All <br> countries |

## Example

```
{
    "id": 842269,
    "name": {
        "textDE": "Abruzzo",
        "textEN": "Abruzzo",
        "textHR": "Abruzzo",
        "textIT": "Abruzzo",
        "textSI": "Abruzzo"
    },
    "countryld": 100147
}
```

<!-- Pages 251 - 260 -->

# RestRegionList 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| status | String |  |
| errorCode | Number | Displays only if error occurred |
| regions | Array of RestRegion |  |

## Example

```
{
    "status": "OK",
    "regions": [
        {
            "id": 555307,
            "name": {
                "textDE": "Abaco Islands",
                "textEN": "Abaco Islands",
                "textHR": "Abaco Islands",
                "textIT": "Abaco Islands",
                "textSI": "Abaco Islands"
            },
            "countryId": 491658
        },
        {
            "id": 842269,
            "name": {
                "textDE": "Abruzzo",
                "textEN": "Abruzzo",
                "textHR": "Abruzzo",
                "textIT": "Abruzzo",
                "textSI": "Abruzzo"
            },
            "countryId": 100147
        },
        {
            "id": 602966,
            "name": {
                "textDE": "Aegean Islands",
                "textEN": "Aegean Islands",
                "textHR": "Aegean Islands",
                "textIT": "Aegean Islands",
                "textSI": "Aegean Islands"
            },
            "countryId": 100116
        }
    ]
}
```

## RestResponse

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| status | RestStatus |  |
| errorCode | Number |  |

## Example

\{
status:"OK",
url:"https://payment.nausys.com/NauSYS-payment/payment/v1/public/paymentForm/123-123456789"
\}

# RestSailType 

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long |  |
| name | RestInternationalText |  |

## Example

```
{
    "id":"4",
    "name": {
        "textDE":"furling/roll",
"textEN":"furling/roll",
"textHR":"furling/roll (samonavijajue)",
"textIT":"furling/roll"
    }
}
```

## RestSailTypeList

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| status | String |  |
| errorCode | Number | Displays only if error occurred |
| sailTypes | Array of RestSailType |  |

## Example

```
{
    "status": "OK",
    "sailTypes": [
        {"id": 4,
            "name": {"textDE": "classic/standard",
                "textEN": "classic/standard",
                "textHR": "classic/standard",
                "textIT": "classic/standard",
                "textSI": "classic/standard"
            }
        },
        {
            "id": 3,
            "name": {
                "textDE": "Lattengroß",
                "textEN": "full batten",
                "textHR": "full batten",
                "textIT": "steccata",
                "textSI": "full batten"
            }
        },
        {
            "id": 1,
            "name": {
                "textDE": "Roll",
                "textEN": "furling/roll",
                "textHR": "furling/roll (samonavijajue)",
                "textIT": "avvolgi",
                "textSI": "furling/roll (samonavijajue)"
            }
        }
    ]
}
```

# RestSeason 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long |  |
| charterCompanyId | Long | Relates to Catalogue endpoint All charter <br> companies |
| season | String |  |
| from | Date |  |
| to | Date |  |
| defaultSeason | Boolean |  |
| locationsId | Array of Long | Represent a list of locations where the <br> season is applied. <br> If the field is empty(null) or does not <br> exist, this means it applies to all <br> locations. <br> If the field is not empty then it applies <br> only to these locations. |

## Example

```
{
    "id": 569123,
    "charterCompanyId": 120920,
```

```
    "season": "2015",
    "from": "01.01.2015",
    "to": "31.12.2015",
    "defaultSeason": true,
    "locationsId": [
        51,
        5168287,
        53
    ]
}
```

# RestSeasonList 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| status | String |  |
| errorCode | Number | Displays only if error occurred |
| seasons | Array of RestSeason |  |

## Example

```
{
    "status": "OK",
    "seasons": [
        {
            "id": 570164,
            "charterCompanyId": 110525,
            "season": "2015",
            "from": "01.01.2015",
            "to": "31.12.2015",
            "defaultSeason": true
        },
        {
            "id": 511306,
            "charterCompanyId": 100553,
            "season": "2014",
            "from": "01.01.2014",
            "to": "31.12.2014",
            "defaultSeason": false
        },
```

```
    {
        "id": 621905,
        "charterCompanyId": 100553,
        "season": "2015",
        "from": "01.01.2015",
        "to": "31.12.2015",
        "defaultSeason": true,
        "locationsId": [
            51,
            5168287,
            53
        ]
    }
    ]
}
```

# RestService 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long |  |
| name | RestInternationalText |  |

## Example

```
{
    "id": 493244,
    "name": {
        "textDE": "Yachtmanager",
        "textEN": "Yachtmanager",
        "textHR": "Voditelj jahte",
        "textIT": "Yachtmanager",
        "textSI": "Voditelj jahte"
    }
    }
```

## RestServiceList

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| status | String |  |
| errorCode | Number | Displays only if error occurred |
| services | Array of RestService |  |

## Example

```
{
    "status": "OK",
    "services": [
        {
            "id": 119044,
            "name": {
                "textDE": "100% der Treibstoffkosten",
                "textEN": "100% fuel used",
                "textHR": "100% potroßenog goriva",
                "textIT": "100% di carburante consumato",
                "textSI": "100% potroßenog goriva"
            }
        },
        {
            "id": 468000,
            "name": {
                "textDE": "100% Nachlass bei Tankfüllung in der Marina Kastela ",
                "textEN": "100% of fuel consumed only in Marina Kastela",
                "textHR": "100% potroßenog goriva - samo u marini Kaštela",
                "textIT": "100% di sconto sul serbatoio pieno in Marina Kastela",
                "textSI": "100% potroßenog goriva - samo u marini Kaštela"
            }
        },
        {
            "id": 119353,
            "name": {
                "textDE": "24 Stunden Hotline",
                "textEN": "24 hour hotline",
                "textHR": "24 sata hotline",
                "textIT": "24 ore hotline",
                "textSI": "24 sata hotline"
            }
        }
    ]
}
```

# RestStatus 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| status | String |  |
| errorCode | Number |  |
| Status | Code |  |
| OK | 0 |  |
| AUTHENTICATION_ERROR | 100 |  |
| OPERATION_NOT_ALLOWED | 101 |  |
| INSUFFICIENT_DATA | 201 |  |
| INVALID_DATE_FORMAT | 202 |  |
| INVALID_NUMBER_FORMAT | 203 |  |
| INVALID_EMAIL_FORMAT | 204 |  |
| CREW_LIST_LOCKED | 301 |  |
| INVALID_COUNTRY_ID | 401 |  |

| INVALID_YACHT_ID | 402 |
| :-- | :-- |
| WRONG_YACHT_OWNERSHIP | 403 |
| NOT_ALLOWED_TO_BOOK_THIS_YACHT | 404 |
| INVALID_PAYMENT_METHOD | 405 |
| INVALID_CURRENCY | 406 |
| UNKNOWN_ERROR | 999 |

# RestSteeringType 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long |  |
| name | RestInternationalText |  |

## Example

```
{
    "id": 103108,
    "name": {
        "textDE": "Joystick ",
        "textEN": "Joystick ",
        "textHR": "Joystick ",
        "textIT": "Joystick ",
        "textSI": "Joystick "
    }
    }
```

## RestSteeringTypeList

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| status | String |  |
| errorCode | Number | Displays only if error occurred |
| steeringTypes | Array of RestSteeringType |  |

## Example

```
{
    "status": "OK",
    "steeringTypes": [
        {
            "id": 1,
            "name": {
                "textDE": "2 Steuerräder",
                "textEN": "2 Steering Wheels",
                "textHR": "2 kormilarska kola (timuna)",
                "textIT": "Doppia timoneria",
                "textSI": "2 kormilarska kola (timuna)"
            }
        },
        {
            "id": 103108,
            "name": {
                "textDE": "Joystick ",
                "textEN": "Joystick ",
                "textHR": "Joystick ",
                "textIT": "Joystick ",
                "textSI": "Joystick "
            }
        },
        {
            "id": 2,
            "name": {
                "textDE": "Radsteuerung",
                "textEN": "Steering Wheel ",
                "textHR": "Kormilarsko kolo (Timun)",
                "textIT": "Timone",
                "textSI": "Kormilarsko kolo (Timun)"
            }
        }
    ]
}
```

# RestUser 

Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long |  |
| name | String |  |
| surname | String |  |
| email | String | list of all user emails separated by a <br> comma |
| groupPolicies | a list of RestGroupPolicy | all group policies that are assigned to <br> the user |
| googleEmailStatus | String | possible values: LINKED, <br> EMAIL_MISMATCH and NOT_LINKED |
| googleEmail | String | google email linked with the account |

## Example

```
{
    "charterBasesId": [
        102751,
        102755,
        102752,
        102754
    ],
    "email": [
        "other@email.com"
```

```
    ],
    "googleEmail": "test@email.com",
    "googleEmailStatus": "EMAIL_MISMATCH",
    "groupPolicies": [
        {
            "domainId": 1201,
            "domainName": "Test Charter Company",
            "id": 168837,
            "name": "Full access"
        }
    ],
    "id": 345546,
    "name": "Marcus",
    "surname": "M"
}
```

# RestUserList 

Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| status | String |  |
| errorCode | Number | Displays only if error occurred |
| list | Array of RestUser |  |

## RestWaitingOptionsRequest

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| credentials | RestAuthentication |  |
| periodFrom | Date |  |
| periodTo | Date |  |
| yacht | Long | Contains yacht id |

## Example

```
{
    "credentials": {
        "username": "xxx@xxxxx",
        "password": "xxx"
    },
    "periodFrom": "20.10.2021",
    "periodTo": "25.10.2021",
    "yacht": 479293
}
```

Example 2
\{
"credentials": \{
"username": "xxx@xxx",
"password": "xxxxx"
\},
"periodFrom": "23.10.2021",
"periodTo": "30.10.2021",
"yacht": 479293
\}

# RestWaitingOptionsResponse 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| status | String | status code |
| waitingOptions | String | number of waiting options on boat for <br> given period |
| id | String | reservation id |
| queuePosition | String | position in waiting line $(1=$ first, $2=$ <br> second etc.) |

## Example

```
{
    "waitingOptions": "6",
    "status": "OK",
    "id: 890270154": "queuePosition: 2",
    "id: 890270202": "queuePosition: 4"
}
```

Example 2
\{
"waitingOptions": "0",
"status": "OK"
\}

<!-- Pages 261 - 270 -->

# RestWarehouseTransferCreateRequest 

| Field | Type | Description | required |
| :-- | :-- | :-- | :-- |
| externalld | String |  | true |
| externalProductld | String |  | true |
| sourceld | String |  | destinationld $==$ null |
| destinationld | String |  | sourceld $==$ null |
| sourceType | String | type of source, default USER | false |
| destinationType | String | type of destination, default <br> USER | false |
| quantity | String | Data Types | true |
| status | String |  | true |
| credentials | Object | RestAuthentication |  |

sourceType and destinationType possible values
USER
WAREHOUSE
status possible values
PENDING
APPROVED

## Example

Creating a pending material loan(to user) transfer
\{
"externalId" : "sampleExternalSystemTransferId",
"externalProductId":"sampleExternalSystemProductId",
"destinationId" : "sampleUserId",
"quantity" : "123.45",
"status" : "PENDING"
\}
Creating a pending material return(from user) transfer
\{
"externalId" : "sampleExternalSystemTransferId",
"externalProductId":"sampleExternalSystemProductId",
"sourceId" : "sampleUserId",
"quantity" : "123.45",

"status" : "PENDING"

# RestWarehouseTransferListRequest

|  Field | Type | Description | required  |
| --- | --- | --- | --- |
|  externallds | List | of type String, do not include
if ids != null or id != null | false  |
|  ids | List | of type Number, do not
include if externallds != null
or id != null | false  |
|  credentials | Object | RestAuthentication | true  |
|  id | Number |  | false  |
|  createdTimeFrom | String | with pattern DateTime1 | false  |
|  createdTimeTo | String | with pattern DateTime1 | false  |
|  processedTimeFrom | String | with pattern DateTime1 | false  |
|  processedTimeTo | String | with pattern DateTime1 | false  |
|  warehouseld | Number |  | false  |
|  products | List | of type Number | false  |
|  status | Listq | of type String | false  |
|  status possible value |  |  |   |
|  approved |  |  |   |
|  rejected |  |  |   |
|  pending |  |  |   |

## RestWarehouseTransferListResponse

|  Field | Type | Description  |
| --- | --- | --- |
|  transfers | List | of type RestWarehouseTransferResponse  |

## RestWarehouseTransferResponse

|  Field | Type | Description  |
| --- | --- | --- |
|  externalld | String | external system id  |
|  id | Number |   |
|  createdTime | String |   |
|  processedTime | String |   |
|  quantity | String |   |
|  warehouseld | Number |   |
|  product | Object | *RestProduct  |

| transferStatus | String |  |
| :-- | :-- | :-- |
| transferStatus possible values |  |  |
| APPROVED |  |  |
| REJECTED |  |  |
| PENDING |  |  |

# RestYacht 

| Field | Type | Description |
| :--: | :--: | :--: |
| id | Long |  |
| name | String |  |
| companyld | Long | Relates to Catalogue endpoint All charter companies |
| baseId | Long | Relates to Catalogue endpoint All charter bases |
| locationld | Long | locationld of base <br> Relates to Catalogue endpoint All locations |
| yachtModelld | Long | Relates to Catalogue endpoint All yachts model |
| internalUse | boolean | Visible only if using API for fleet operators, not visible if accessed by agency credentials when none of the boats are on "internal use" and thus not applicable. |
| draft | Decimal |  |
| cabins | Number |  |
| cabinsCrew | Number |  |
| berthsCabin | Number |  |
| berthsSalon | Number |  |
| berthsCrew | Number |  |
| berthsTotal | Number | Total number of sleeping berths |
| maxPersons | Number | Maximum number of persons allowed on board according to the laws of the country of charter |
| wc | Number |  |
| wcCrew | Number |  |
| buildYear | Number |  |
| renewed | Number |  |
| launchedYear | Number |  |
| engines | Number |  |
| enginePower | Decimal |  |
| steeringTypeld | Long | Relates to Catalogue endpoint All steering types |

| sailTypeld | Long | Relates to Catalogue endpoint All sail types |
| :--: | :--: | :--: |
| sailRenewed | Number |  |
| genoaTypeld | Long | Relates to Catalogue endpoint All sail types |
| genoaRenewed | Number |  |
| standardYachtEquipment | Array of RestYachtEquipment |  |
| euminia | RestEuminia | if ship is not evaluated in Euminia rating system, response do not contain this structure |
| fourStarCharter | Boolean |  |
| mainPictureUrl | String | Using the yacht pictures endpoint retrieves images at their original size, but it is possible to select an image size by using additional " $h$ " and/or " $w$ " parameters. <br> e.g. https://ws.nausys.com/CBMS-exter nal/rest/yacht/103152/pictures/main.jp $\mathrm{g} ? \mathrm{w}=600$ |
| picturesURL | Array of String | Using the yacht pictures endpoint retrieves images at their original size, but it is possible to select an image size by using additional " $h$ " and/or " $w$ " parameters. <br> e.g. https://ws.nausys.com/CBMS-exter nal/rest/yacht/103152/pictures/main.jp $\mathrm{g} ? \mathrm{w}=600$ |
| commission | Decimal | Agency commission |
| deposit | Decimal |  |
| depositWhenInsured | Decimal | visible when different from regular "deposit". To be used as deposit when deposit reduction service is added to reservation |
| depositCurrency | String |  |
| maxDiscount | Decimal |  |
| seasonSpecificData | Array of RestYachtSeason |  |
| needsOptionApproval | boolean | if created option needs to be approved by charter company |
| canMakeBookingFixed | boolean | if you can create fix booking by yourself (convert option to reservation) through API or Agency portal, or you charter company needs to do it for you |
| flagsid | Array of Long | Contains ids of RestCountry. |
| charterType | String | Indicates whether charter type is BAREBOAT or CREWED |
| fuelTank | Number |  |
| waterTank | Number |  |
| mastLength | Decimal |  |
| propulsionType | String | SAILDRIVE, SHAFT, ZDRIVE, IPS, OUTBOARD, SURFACE, JET |

|  oneWayPeriods | Array of RestOneWayPeriod | Periods during which the boat is available in other location  |
| --- | --- | --- |
|  numberOfRudderBlades | Number |   |
|  engineBuilderId | Long | Relates to Catalogue endpoint All engine builders  |
|  hullColor | String | WHITE, BLUE, GREY, RED, BLACK, GOLD, YELLOW, ORANGE, DARK_COFFEE, BEIGE  |
|  thirdPartylnsuranceAmount | Decimal |   |
|  thirdPartylnsuranceCurrency | String |   |
|  checkInPeriods | Array of RestCheckInPeriod | Periods during which the boat is bookable on specific days of week for specific minimal duration  |
|  engineBuildYear | Number |   |
|  fuelType | String | DIESEL, HYBRID, PETROL  |
|  crewedCharterType | String | Indicates whether crewed charter type is SKIPPER, SKIPPER_HOSTESS or ALL_INCLUSIVE  |
|  highlights | String | only on eng  |
|  note | String | only on eng  |
|  highlightsIntText | RestInternationalText |   |
|  noteIntText | RestInternationalText |   |
|  engineRenewedYear | Integer | year of engine renewal  |
|  fuelConsumption | Integer |   |
|  maxSpeed | Integer |   |
|  cruisingSpeed | Integer |   |
|  isPremium | boolean | is yacht host company premium  |
|  recommendedPersons | Integer |   |
|  checkInTime | String |   |
|  checkOutTime | String |   |
|  pictures | Array of RestYachtPicture |   |
|  showers | Integer |   |
|  showersCrew | Integer |   |
|  maxDiscountFromCommission | Decimal | Visible only to agencies  |
|  agencyDiscountType | String | Visible only to agencies. Determines whether maxDiscountFromCommission i s calculated from Client price (CLIENT_PRICE) or Agency commission (AGENCY_COMMISSION).  |
|  crewCount | Integer |   |
|  crewMemberIds | Array of Long |   |
|  registrationNumber | String | Visible only to charter companies  |
|  mySeaCode | String |   |

| onSale | Boolean | Defines if the yacht is available for buying. Field is only visible when it is available for sale. |
| :--: | :--: | :--: |

# Example 

```
{
"id": 103152,
"name": "Sea Star",
"companyId": 201,
"baseId": 102166,
"locationId": 62,
"yachtModelld": 263,
"cruisingSpeed": 18,
"draft": 1.8,
"cabins": 2,
"cabinsCrew": 0,
"berthsCabin": 4,
"berthsSalon": 2,
"berthsCrew": 0,
"berthsTotal": 6,
"wc": 1,
"wcCrew": 0,
"engines": 1,
"enginePower": 19,
"steeringTypeId": 2,
"sailTypeId": 1,
"sailRenewed": 2015,
"genoaTypeId": 1,
"genoaRenewed": 2015,
"highlights":"Asymmetric Spinnaker",
"highlightsIntText":[
    "textEN":"NEW SAILS 2016",
    "textHR":"NOVA JEDRA 2016"
},
"noteIntText":[
    "textEN":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "textHR":"Lorem Ipsum jednostavno je lažni tekst tiskarske i slovne industrije."
},
"engineBuildYear": 2021,
"fuelType": "DIESEL",
"standardYachtEquipment": [
{
"id": 14232,
"quantity": 1,
"equipmentId": 17,
"comment": {}
},
{
"id": 14229,
"quantity": 1,
"equipmentId": 100619,
"comment": {}
},
{
"id": 14241,
"quantity": 1,
"equipmentId": 13,
"comment": {}
}
],
"euminia": {
"cleanliness": "4.83",
"equipment": "4.79",
"personalService": "4.78",
"pricePerformance": "4.67",
"recommendation": "100 %",
"total": "4.79",

"reviews": "6"
},
"fourStarCharter": true,
"fuelConsumption": 30,
"mainPictureUrl": "https://ws.nausys.com/CBMS-external/rest/yacht/103152/pictures/main.jpg",
"picturesURL": [
"https://ws.nausys.com/CBMS-external/rest/yacht/103152/pictures/main.jpg",
"https://ws.nausys.com/CBMS-external/rest/yacht/103152/pictures/layout.jpg",
"https://ws.nausys.com/CBMS-external/rest/yacht/103152/pictures/layout.jpg",
"https://ws.nausys.com/CBMS-external/rest/yacht/103152/pictures/main.jpg",
"https://ws.nausys.com/CBMS-external/rest/yacht/103152/pictures/slika (3).jpg",
"https://ws.nausys.com/CBMS-external/rest/yacht/103152/pictures/slika (4).jpg",
"https://ws.nausys.com/CBMS-external/rest/yacht/103152/pictures/slika (5).jpg"
],
"commission": 0.19,
"deposit": 1050,
"currencyDeposit": "EUR",
"maxDiscount": 0.15,
"maxSpeed": 22,
"note": "Draft 0.90 m to 1.90 m lifting (lifting keel) ",
"seasonSpecificData": [
\{
"additionalYachtEquipment": [
\{
"id": 14247,
"quantity": 1,
"price": "80.00",
"equipmentId": 19,
"comment": (\},
"priceMeasureId": 1,
"calculationType": "SEPARATE_PAYMENT",
"condition": (\},
"validPeriodFrom":"28.04.2023",
"validPeriodTo":"14.05.2023"
\},
\{
"id": 14248,
"quantity": 1,
"price": "80.00",
"equipmentId": 51,
"comment": (\},
"priceMeasureId": 1,
"calculationType": "SEPARATE_PAYMENT",
"condition": (\},
"validPeriodFrom":"28.04.2023",
"validPeriodTo":"14.05.2023"
\}
],
"services": [
\{
"id": 502399,
"serviced": 53,
"price": "50.00",
"priceMeasureId": 54,
"calculationType": "SEPARATE_PAYMENT",
"description": (\},
"obligatory": false
\},
\{
"id": 502400,
"serviced": 101660,
"price": "150.00",
"priceMeasureId": 54,
"calculationType": "SEPARATE_PAYMENT",
"description": \{

```
            "textDE": "+ 200 EUR refundable",
            "textEN": "+ 200 EUR refundable",
            "textHR": "+ 200 EUR povratno"
        },
        "obligatory": false
    }
},
"prices": [
    {
        "dateFrom": "01.01.2014",
        "dateTo": "23.05.2014",
        "price": 930,
        "currency": "EUR",
        "type": "WEEKLY",
        "locationsId": [
            68
        ]
    },
    {
        "dateFrom": "20.09.2014",
        "dateTo": "31.12.2014",
        "price": 930,
        "currency": "EUR",
        "type": "WEEKLY",
        "locationsId": [
            68
        ]
    }
],
"registrationNumber": "123456",
    "regularDiscounts": [
    {
        "discountItemId": 1,
        "amount": 5,
        "type": "PERCENTAGE"
    },
    {
        "discountItemId": 100509,
        "amount": 5,
        "type": "PERCENTAGE"
    }
    }
},
[
    "additionalYachtEquipment": [
    {
        "id": 14247,
        "quantity": 1,
        "price": "80.00",
        "equipmentId": 19,
        "comment": {},
        "priceMeasureId": 1,
        "calculationType": "SEPARATE_PAYMENT",
        "condition": {}
    },
    {
        "id": 14248,
        "quantity": 1,
        "price": "80.00",
        "equipmentId": 51,
        "comment": {},
        "priceMeasureId": 1,
        "calculationType": "SEPARATE_PAYMENT",
        "condition": {}
    }
],
"services": [
    {
        "id": 590003,
        "serviceId": 53,
        "price": "50.00",
```

```
        "priceMeasureId": 54,
        "calculationType": "SEPARATE_PAYMENT",
        "description": [],
        "obligatory": false
    },
    {
        "id": 590004,
        "serviceId": 101660,
        "price": "150.00",
        "priceMeasureId": 54,
        "calculationType": "SEPARATE_PAYMENT",
        "description": [
            "textDE": "+ 200 EUR refundable",
            "textEN": "+ 200 EUR refundable",
            "textHR": "+ 200 EUR povratno"
        },
        "obligatory": false
    }
    ],
    "prices": [
        {
            "dateFrom": "19.09.2015",
            "dateTo": "31.12.2015",
            "price": 930,
            "currency": "EUR",
            "type": "WEEKLY",
            "locationsId": [
                68
        ]
    },
    {
        "dateFrom": "01.01.2015",
        "dateTo": "22.05.2015",
        "price": 930,
        "currency": "EUR",
        "type": "WEEKLY",
        "locationsId": [
            68
        ]
    }
    ],
    "regularDiscounts": [
        {
            "discountItemId": 100509,
            "amount": 5,
            "type": "PERCENTAGE"
        },
        {
            "discountItemId": 5,
            "amount": 10,
            "type": "PERCENTAGE"
        }
        ]
    }
    ],
    "needsOptionApproval": false,
    "canMakeBookingFixed": true,
    "flagsId": [
        100101
    ],
"checkInPeriods": [
    {
        "dateFrom": "01.01.1970",
        "dateTo": "31.12.2019",
        "minimalReservationDuration": 3,
        "checkInMonday": false,
        "checkInTuesday": false,
```

"checkInWednesday": true,
"checkInThursday": false,
"checkInFriday": false,
"checkInSaturday": true,
"checkInSunday": false,
"checkOutMonday": false,
"checkOutTuesday": false,
"checkOutWednesday": true,
"checkOutThursday": false,
"checkOutFriday": false,
"checkOutSaturday": true,
"checkOutSunday": false
],
\{
"dateFrom": "31.12.2019",
"dateTo": "01.01.2999",
"minimalReservationDuration": 7,
"checkInMonday": false,
"checkInTuesday": false,
"checkInWednesday": false,
"checkInThursday": false,
"checkInFriday": false,
"checkInSaturday": true,
"checkInSunday": false,
"checkOutMonday": false,
"checkOutTuesday": false,
"checkOutWednesday": false,
"checkOutThursday": false,
"checkOutFriday": false,
"checkOutSaturday": true,
"checkOutSunday": false
\}
],
"charterType": "CREWED",
"propulsionType": "SAILDRIVE",
"crewedCharterType":"ALL_INCLUSIVE",
"isPremium": true,
"checkOutTime" = "11:00:00",
"checkInTime" = "14:00:00".
"showers":"0",
"showersCrew":"1",
"maxDiscountFromCommission" : 0.10000,

<!-- Pages 271 - 280 -->

"agencyDiscountType" : "Client price", "crewCount": 4, "crewMemberIds": [ 506, 503, 505 ], "highlightsIntText":[ "textEN":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", "textHR":"Lorem Ipsum jednostavno je lažni tekst tiskarske i slovne industrije. Lorem Ipsum je standardni lažni tekst u industriji još od 1500-ih, kada je nepoznati tiskar uzeo galeju slova i pomešao je kako bi napravio knjigu uzoraka slova. Preživio je ne samo pet stoljeća, nego i skok u elektronički slog, ostajući u biti nepromijenjen. Populariziran je 1960-ih izdavanjem listova Letraset koji sadrže odlomke Lorem Ipsuma, au novije vrijeme sa softverom za stolno izdavaštvo kao što je Aldus PageMaker uključujući verzije Lorem Ipsuma." \}

# RestYachtAdditionalEquipmentPrice

## Definition

|  Field | Type | Description  |
| --- | --- | --- |
|  id | Long |   |
|  quantity | Number |   |
|  price | String | deprecated  |
|  currency | String |   |
|  equipmentld | Long | Used to fetch equipment name. Relates to Catalogue endpoint All equipment  |
|  comment | RestInternationalText |   |
|  priceMeasureld | Long | Relates to Catalogue endpoint All price measures  |
|  calculationType | String | Values: SEPARATE_PAYMENT, ADVANCE_PAYMENT  |
|  condition | RestInternationalText |   |
|  amount | String | currency: 2 decimal places, percentage: 4 decimal places  |
|  amountIsPercentage | Boolean |   |
|  percentageCalculationType | String | Values: PRICELIST_PRICE, CLIENT_PRICE, AGENCY_PRICE, DAILY_PRICE ,PRICELIST_PRICE_WITHOUT_VAT  |
|  validForBases | Array of Long | baseFrom of the current reservation (if empty, applies to all bases)  |
|  minimumPrice | String | minimum price for this equipment item  |
|  minDuration | Integer | Defines conditional availability of equipment in relation to booking  |
|  maxDuration | Integer | duration in days. Reservation duration
must fall between these two values for equipment to be available for usage.  |

# Example 1 

```
{
    "id": 102779,
    "quantity": 1,
    "price": "80.00",
    "currency": "EUR",
    "equipmentId": 14,
    "comment": {
        "textEN": "Outboard 2hp"
    },
    "priceMeasureId": 1,
    "calculationType": "ADVANCE_PAYMENT",
    "condition": {},
    "amount": "80.00",
    "minDuration": 7,
    "maxDuration": 13
}
```

Example 2

```
{
    "id": 7755103,
    "quantity": 1,
    "price": "0.00",
    "currency": "EUR",
    "equipmentId": 476990,
    "comment": {},
    "priceMeasureId": 1,
    "calculationType": "SEPARATE_PAYMENT",
    "condition": {},
    "amount": "0.1500",
    "amountIsPercentage": true,
    "percentageCalculationType": "CLIENT_PRICE"
}
```

## RestYachtBuilder

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long |  |
| name | String |  |

# Example 

```
{
    "id":"1",
    "name":"Bavaria Yachtbau"
}
```

## RestYachtBuilderList

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| status | String |  |
| errorCode | Number | Displays only if error occurred |
| builders | Array of RestYachtBuilder |  |

## Example

```
{
    "status": "OK",
    "builders": [
        {
            "id": 203,
            "name": "3000 Marine (Mondial Yachts)"
        },
        {
            "id": 522081,
            "name": "3C Composites"
        },
        {
            "id": 836999,
            "name": "Abacus Marine"
        }
    ]
}
```

## RestYachtCabinDefinition

| Field | Type | Description |
| :-- | :-- | :-- |
| cabinDefinitionId | Long | Official reservation number |
| numberOfPassengers | Integer |  |
| discounts | Array of RestDiscount | Array of discounts applied on price list <br> price |
| additionalEquipment | Array of RestYachtReservationAdditional <br> Equipment | Array of selected additional equipment <br> for this reservation. See RestYachtReserv <br> ationAdditionalEquipment for more <br> details |
| services | Array of RestYachtReservationService | Array of selected services at the base <br> (includes obligatory services) for this <br> reservation. See RestYachtReservationSer <br> vice for more details |

## Example

\{
"cabinDefinitionId": 10279571,

"numberOfPassengers": 1,
"discounts": [
\{
"discountItemId": 1525416,
"amount": 15,
"type": "PERCENTAGE"
\}
],
"additionalEquipment": [
\{
"id": 473651,
"quantity": "2.00",
"listPrice": "200.00",
"currency": "EUR",
"priceMeasureId": 54,
"equipmentld": 4,
"calculationType": "SEPARATE_PAYMENT",
"condition": {},
"amount": "200.00"
\}
],
"services": [
\{
"id": 279940951,
"quantity": "2.00",
"listPrice": "0.00",
"currency": "EUR",
"priceMeasureId": 54,
"serviceId": 119353,
"calculationType": "SEPARATE_PAYMENT",
"condition": {},
"amount": "0.00"
\}
\{
"id": 279940952,
"quantity": "2.00",
"listPrice": "250.00",
"currency": "EUR",
"priceMeasureId": 54,
"serviceId": 8219444,

"calculationType": "SEPARATE_PAYMENT", "condition": {}, "amount": "250.00" } ] } RestYachtCategory

|  Field | Type | Description  |
| --- | --- | --- |
|  id | Long |   |
|  name | RestInternationalText |   |

# Example

```
{
    "id":"1",
    "name": {
        "textDE":"Segelyacht",
"textEN":"Sailing yacht",
"textHR":"Jedrilica",
"textIT":"Barca a vela"
    }
```

}

## RestYachtCategoryList

## Definition

|  Field | Type | Description  |
| --- | --- | --- |
|  status | String |   |
|  errorCode | Number | Displays only if error occurred  |
|  categories | Array of RestYachtCategory |   |

## Example

```
{
    "status": "OK",
"categories": [
        {"id": 51,
            "name": {
                "textDE": "Katamaran",
                "textEN": "Catamaran",
                "textHR": "Katamaran",
                "textIT": "Catamaran",
                "textSI": "Katamaran"
            }
        },
        {
            "id": 565915,
            "name": {
                "textDE": "Fisherman",
                "textEN": "Fisherman",
                "textHR": "Fisherman",
                "textIT": "Fisherman",
                "textSI": "Fisherman"
            }
        },
        {
            "id": 102,
            "name": {
                "textDE": "Gulet",
                "textEN": "Gulet",
                "textHR": "Gulet",
                "textIT": "Golett",
                "textSI": "Gulet"
            }
        }
    ]
}
```

# RestYachtCheckInPeriod 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| dateFrom | Date |  |
| dateTo | Date |  |
| minimalReservationDuration | Integer |  |
| checkInMonday | boolean |  |
| checkInTuesday | boolean |  |
| checkInWednesday | boolean |  |
| checkInThursday | boolean |  |
| checkInFriday | boolean |  |
| checkInSaturday | boolean |  |
| checkInSunday | boolean |  |
| checkOutMonday | boolean |  |
| checkOutTuesday | boolean |  |
| checkOutWednesday | boolean |  |
| checkOutThursday | boolean |  |
| checkOutFriday | boolean |  |

| checkOutSaturday | boolean |  |
| :-- | :-- | :-- |
| checkOutSunday | boolean |  |

# Example 1 

```
{
    "dateFrom": "01.01.1970",
    "dateTo": "31.12.2099",
    "minimalReservationDuration": 3,
    "checkInMonday": false,
    "checkInTuesday": false,
    "checkInWednesday": true,
    "checkInThursday": false,
    "checkInFriday": false,
    "checkInSaturday": true,
    "checkInSunday": false,
    "checkOutMonday": false,
    "checkOutTuesday": false,
    "checkOutWednesday": true,
    "checkOutThursday": false,
    "checkOutFriday": false,
    "checkOutSaturday": true,
    "checkOutSunday": false
    }
```

Example 2
\{
"dateFrom": "31.12.2009",
"dateTo": "01.01.2999",
"minimalReservationDuration": 7,
"checkInMonday": false,
"checkInTuesday": false,
"checkInWednesday": false,
"checkInThursday": false,
"checkInFriday": false,
"checkInSaturday": true,
"checkInSunday": false,
"checkOutMonday": false,
"checkOutTuesday": false,
"checkOutWednesday": false,

"checkOutThursday": false, "checkOutFriday": false, "checkOutSaturday": true, "checkOutSunday": false \}

# RestYachtCrewMember 

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long |  |
| name | String |  |
| surname | String |  |
| crewRole | String |  |
| livingPlace | String |  |
| summary | String |  |
| photoUrl | String |  |
| languages | Array of String |  |

## Example

\{
"id": "52771",
"name": "Test",
"surname": "Crew",
"crewRole": "Skipper",
"livingPlace": "Pula",
"summary": "Skipper with 15 years of experience.",
"photoUrl": "https://ContactImages/102701/4503801/ORIGINAL/profilePicture.png",
"languages": ["English", "Croatian"]
\}

## RestYachtEquipment

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long |  |
| quantity | Number |  |
| equipmentld | Long | Used to fetch equipment name. <br> Relates to Catalogue endpoint All <br> equipment |
| highlight | Boolean |  |
| comment | RestInternationalText |  |

## Example

```
{
"id":14232,
"quantity":1,
"equipmentId":17,
"comment":{}
}
```

# RestYachtList 

## Definition

| Field | Type | Description |
| :--: | :--: | :--: |
| status | String |  |
| errorCode | Number | Displays only if error occurred |
| yachts | Array of RestYacht | Note: Using the yacht pictures endpoint retrieves images at their original size, but it is possible to select an image size by using additional "h" and/or "w" parameters. <br> e.g. https://ws.nausys.com/CBMS-exter nal/rest/yacht/103152/pictures/main.jp $\mathrm{g} ? \mathrm{w}=600$ <br> Only responses for agency request will have fields <br> maxDiscountFromCommission and agencyDiscountType ("Client price" \& "Agency commission") |
| yachtIDs | Array of Long | Export only yachts IDs |

## Example

```
{
    "status": "OK",
    "yachtIDs":[103152,103151],
    "yachts": [
    {
        "id": 103152,
        "name": "Sea Star",
        "companyId": 201,
        "baseId": 102166,
        "locationId": 62,
        "yachtModelId": 263,
        "draft": 1.8,
        "cabins": 2,
        "cabinsCrew": 0,
        "berthsCabin": 4,
        "berthsSalon": 2,
        "berthsCrew": 0,
        "berthsTotal": 6,
        "wc": 1,
        "wcCrew": 0,
        "engines": 1,
        "enginePower": 19,
        "steeringTypeId": 2,
        "sailTypeId": 1,
        "sailRenewed": 2015,
        "genoaTypeId": 1,
        "genoaRenewed": 2015,
        "standardYachtEquipment": [
            "id": 14232,
            "quantity": 1,
```

```
    "equipmentId": 17,
    "comment": {}
},
{
    "id": 14229,
    "quantity": 1,
    "equipmentId": 100619,
    "comment": {}
}
],
"euminia": {
"cleanliness": "4.83",
"equipment": "4.79",
"personalService": "4.78",
"pricePerformance": "4.67",
"recommendation": "100 %",
"total": "4.79",
"reviews": "6"
},
"fourStarCharter": true,
"mainPictureUrl": "https://ws.nausys.com/CBMS-external/rest/yacht/103152/pictures/main.jpg",
"picturesURL": [
"https://ws.nausys.com/CBMS-external/rest/yacht/103152/pictures/main.jpg",
"https://ws.nausys.com/CBMS-external/rest/yacht/103152/pictures/layout.jpg",
"https://ws.nausys.com/CBMS-external/rest/yacht/103152/pictures/layout.jpg",
"https://ws.nausys.com/CBMS-external/rest/yacht/103152/pictures/main.jpg",
"https://ws.nausys.com/CBMS-external/rest/yacht/103152/pictures/slika (3).jpg",
"https://ws.nausys.com/CBMS-external/rest/yacht/103152/pictures/slika (4).jpg",
"https://ws.nausys.com/CBMS-external/rest/yacht/103152/pictures/slika (5).jpg"
],
"commission": 0.19,
"deposit": 1050,
"maxDiscount": 0.15,
"seasonSpecificData": [
{
    "additionalYachtEquipment": [
        {
            "id": 14247,
            "quantity": 1,
            "price": "80.00",
            "equipmentId": 19,
            "comment": {},
            "priceMeasureId": 1,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": {}
        },
        {
            "id": 14248,
            "quantity": 1,
            "price": "80.00",
            "equipmentId": 51,
            "comment": {},
            "priceMeasureId": 1,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": {}
        },
    "services": [
        {
            "id": 502399,
            "serviceld": 53,
            "price": "50.00",
            "priceMeasureId": 54,
            "calculationType": "SEPARATE_PAYMENT",
            "description": {},
            "obligatory": false
        },
        {
            "id": 502400,
            "serviceld": 101660,
            "price": "150.00",
            "priceMeasureId": 54,
```

<!-- Pages 281 - 290 -->

```
    "calculationType": "SEPARATE_PAYMENT",
    "description": {
        "textDE": "+ 200 EUR refundable",
        "textEN": "+ 200 EUR refundable",
        "textHR": "+ 200 EUR povratno"
    },
    "obligatory": false
    }
],
    "prices": [
    {
        "dateFrom": "01.01.2014",
        "dateTo": "23.05.2014",
        "price": 930,
        "currency": "EUR",
        "type": "WEEKLY",
        "locationsId": [
            68
        ]
    },
    {
        "dateFrom": "20.09.2014",
        "dateTo": "31.12.2014",
        "price": 930,
        "currency": "EUR",
        "type": "WEEKLY",
        "locationsId": [
            68
        ]
    }
],
    "regularDiscounts": [
    {
        "discountItemId": 1,
        "amount": 5,
        "type": "PERCENTAGE"
    },
    {
        "discountItemId": 100509,
        "amount": 5,
        "type": "PERCENTAGE"
    }
    }
],
{
    "additionalYachtEquipment": [
    {
        "id": 14247,
        "quantity": 1,
        "price": "80.00",
        "equipmentId": 19,
        "comment": [],
        "priceMeasureId": 1,
        "calculationType": "SEPARATE_PAYMENT",
        "condition": {}
    },
    {
        "id": 14248,
        "quantity": 1,
        "price": "80.00",
        "equipmentId": 51,
        "comment": [],
        "priceMeasureId": 1,
        "calculationType": "SEPARATE_PAYMENT",
        "condition": {}
    }
],
    "services": [
    {
        "id": 590003,
        "serviceld": 53,
        "price": "50.00",
```

```
        "priceMeasureId": 54,
        "calculationType": "SEPARATE_PAYMENT",
        "description": [],
        "obligatory": false
    },
    {
        "id": 590004,
        "serviceld": 101660,
        "price": "150.00",
        "priceMeasureId": 54,
        "calculationType": "SEPARATE_PAYMENT",
        "description": {
            "textDE": "+ 200 EUR refundable",
            "textEN": "+ 200 EUR refundable",
            "textHR": "+ 200 EUR povratno"
    },
    "obligatory": false
    }
],
"prices": [
    {
        "dateFrom": "19.09.2015",
        "dateTo": "31.12.2015",
        "price": 930,
        "currency": "EUR",
        "type": "WEEKLY",
        "locationsId": [
            68
        ]
    },
    {
        "dateFrom": "01.01.2015",
        "dateTo": "22.05.2015",
        "price": 930,
        "currency": "EUR",
        "type": "WEEKLY",
        "locationsId": [
            68
        ]
    }
],
    "regularDiscounts": [
    {
        "discountItemId": 100509,
        "amount": 5,
        "type": "PERCENTAGE"
    },
    {
        "discountItemId": 5,
        "amount": 10,
        "type": "PERCENTAGE"
    }
    ]
    }
],
"needsOptionApproval": false,
"canMakeBookingFixed": true.
"maxDiscountFromCommission" : 0.10000,
"agencyDiscountType" : "Client price"
},
{
"id": 103151,
"name": "Sea King",
"companyId": 201,
"baseId": 102166,
"locationId": 62,
"yachtModelId": 260,
"draft": 2.15,
"cabins": 3,
"cabinsCrew": 0,
```

```
"berthsCabin": 6,
"berthsSalon": 2,
"berthsCrew": 0,
"berthsTotal": 8,
"wc": 2,
"wcCrew": 0,
"engines": 1,
"enginePower": 56,
"steeringTypeld": 2,
"sailTypeld": 1,
"standardYachtEquipment": [
    {
        "id": 14217,
        "quantity": 1,
        "equipmentId": 6,
        "comment": {}
    },
    {
        "id": 14214,
        "quantity": 1,
        "equipmentId": 15,
        "comment": {}
    }
],
"euminia": {
    "cleanliness": "4.67",
    "equipment": "4.19",
    "personalService": "4.44",
    "pricePerformance": "4.33",
    "recommendation": "100 %",
    "total": "4.39",
    "reviews": "3"
    ],
"fourStarCharter": true,
"mainPictureUrl": "localhost:58080/CBMS-external/rest/yacht/103151/pictures/main.jpg",
"picturesURL": [
    "localhost:58080/CBMS-external/rest/yacht/103151/pictures/main.jpg",
    "localhost:58080/CBMS-external/rest/yacht/103151/pictures/layout.jpg",
    "localhost:58080/CBMS-external/rest/yacht/103151/pictures/layout.jpg",
    "localhost:58080/CBMS-external/rest/yacht/103151/pictures/main.jpg",
    "localhost:58080/CBMS-external/rest/yacht/103151/pictures/slika (2).jpg",
    "localhost:58080/CBMS-external/rest/yacht/103151/pictures/slika (3).jpg",
    "localhost:58080/CBMS-external/rest/yacht/103151/pictures/slika (4).jpg",
    "localhost:58080/CBMS-external/rest/yacht/103151/pictures/slika (5).jpg",
    "localhost:58080/CBMS-external/rest/yacht/103151/pictures/slika (6).jpg"
],
"commission": 0.19,
"deposit": 1550,
"maxDiscount": 0.15,
"seasonSpecificData": [
    {
        "additionalYachtEquipment": [
        {
            "id": 14223,
            "quantity": 1,
            "price": "80.00",
            "equipmentId": 19,
            "comment": {},
            "priceMeasureId": 1,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": {}
    },
    {
        "id": 14224,
        "quantity": 1,
        "price": "80.00",
        "equipmentId": 51,
        "comment": {},
        "priceMeasureId": 1,
        "calculationType": "SEPARATE_PAYMENT",
        "condition": {}
    }
```

```
],
"services": [
{
    "id": 502399,
    "serviceld": 53,
    "price": "50.00",
    "priceMeasureld": 54,
    "calculationType": "SEPARATE_PAYMENT",
    "description": {},
    "obligatory": false
    },
    {
        "id": 502400,
        "serviceld": 101660,
        "price": "150.00",
        "priceMeasureld": 54,
        "calculationType": "SEPARATE_PAYMENT",
        "description": {
            "textDE": "+ 200 EUR refundable",
            "textEN": "+ 200 EUR refundable",
            "textHR": "+ 200 EUR povratno"
        },
        "obligatory": false
    }
    ],
    "prices": [
        {
            "dateFrom": "01.01.2014",
            "dateTo": "23.05.2014",
            "price": 1850,
            "currency": "EUR",
            "type": "WEEKLY"
        },
        {
            "dateFrom": "20.09.2014",
            "dateTo": "31.12.2014",
            "price": 1850,
            "currency": "EUR",
            "type": "WEEKLY"
        }
    ],
    "regularDiscounts": [
        {
            "discountItemId": 1,
            "amount": 5,
            "type": "PERCENTAGE"
        },
        {
            "discountItemId": 100509,
            "amount": 5,
            "type": "PERCENTAGE"
        }
    ]
},
{
    "additionalYachtEquipment": [
        {
            "id": 14223,
            "quantity": 1,
            "price": "80.00",
            "equipmentId": 19,
            "comment": {},
            "priceMeasureld": 1,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": {}
        },
        {
            "id": 14224,
            "quantity": 1,
            "price": "80.00",
            "equipmentId": 51,
            "comment": {},

```
        "priceMeasureId": 1,
        "calculationType": "SEPARATE_PAYMENT",
        "condition": {}
    }
    ],
    "services": [
        {
            "id": 590003,
            "serviceld": 53,
            "price": "50.00",
            "priceMeasureId": 54,
            "calculationType": "SEPARATE_PAYMENT",
            "description": {},
            "obligatory": false
        },
        {
            "id": 590004,
            "serviceld": 101660,
            "price": "150.00",
            "priceMeasureId": 54,
            "calculationType": "SEPARATE_PAYMENT",
            "description": {
            "textDE": "+ 200 EUR refundable",
            "textEN": "+ 200 EUR refundable",
            "textHR": "+ 200 EUR povratno"
        },
        "obligatory": false
    }
    },
    "prices": [
        {
            "dateFrom": "19.09.2015",
            "dateTo": "31.12.2015",
            "price": 1850,
            "currency": "EUR"
        },
        {
            "dateFrom": "01.01.2015",
            "dateTo": "22.05.2015",
            "price": 1850,
            "currency": "EUR"
        }
    ],
    "regularDiscounts": [
        {
            "discountItemId": 100509,
            "amount": 5,
            "type": "PERCENTAGE"
        },
        {
            "discountItemId": 5,
            "amount": 10,
            "type": "PERCENTAGE"
        }
        ]
    }
    ],
    "needsOptionApproval": false,
    "canMakeBookingFixed": true,
    "maxDiscountFromCommission" : 0.10000,
    "agencyDiscountType" : "Client price"
    }
    ]
}
```

# RestYachtMaintenanceMaterialCost 

Definition:

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Number |  |
| itemName | String | enName of the material item |
| quantity | String | Decimal formatted as String |
| quantityMeasure | String | enName of the quantity measure |
| productld | Number | internal product id |
| workerld | Number | internal user id for worker |

# RestYachtMaintenanceWorkingHours 

Definition:

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long |  |
| workerld | Long | internal user ld |
| workerExternalld | String | external system user id |
| date | String | Date formatted as String |
| hours | String | Decimal formatted as String |
| manHourPrice | String | Decimal formatted as String |

## RestYachtModel

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long |  |
| name | String |  |
| yachtCategoryld | Long | Relates to Catalogue endpoint All yacht <br> categories |
| yachtBuilderld | Long | Relates to Catalogue endpoint All yacht <br> builders |
| loa | Decimal | "length overall" - boat length |
| beam | Decimal | "beam overall" or BOA - width of the <br> boat at its widest part |
| draft | Decimal |  |
| cabins | Number |  |
| wc | Number |  |
| waterTank | Number |  |
| fuelTank | Number |  |
| displacement | Number |  |
| virtualLength | Number | virtual length of boat in ft |

# Example 

```
{
    "id":120254,
    "name":"1 - Custom",
    "yachtCategoryId":1,
    "yachtBuilderId":100241,
    "loa":12.57,
    "beam":3.45,
    "draft":1.35,
    "cabins":4,
    "wc":2,
    "waterTank":0,
    "fuelTank":0,
    "displacement":0,
    "virtualLength": 41
}
```

## RestYachtModelList

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| status | String |  |
| errorCode | Number | Displays only if error occurred |
| models | Array of RestYachtModel |  |

## Example

```
{
    "status": "OK",
    "models": [
        {
            "id": 120254,
            "name": "1 - Custom",
            "yachtCategoryId": 1,
            "yachtBuilderId": 100241,
            "1oa": 12.57,
            "beam": 3.45,
            "draft": 1.35,
            "cabins": 4,
            "wc": 2,
            "waterTank": 0,
            "fuelTank": 0,
            "displacement": 0,
"virtualLength": 41
        },
        {
            "id": 837012,
            "name": "Abacus 61 - 3 + 1 cab.",
            "yachtCategoryId": 101,
            "yachtBuilderId": 836999,
            "1oa": 18.66,
            "beam": 5.0,
            "draft": 0.88,
            "cabins": 4,
            "wc": 3,
            "waterTank": 0,
            "fuelTank": 0,
            "displacement": 0,
"virtualLength": 61
        }
    ]
}
```

# RestYachtPicture 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| src | String | Picture URL |
| catalogPhoto | Boolean | Indicates whether this is a catalog photo |
| mainPicture | Boolean | Indicates whether this is the main picture |
| layoutPicture | Boolean | Indicates whether this is a layout picture |
| isGenuine | Boolean | Indicates whether this is an Original or <br> Generic boat picture |
| lastModified | String |  |
| description | RestInternationalText |  |

## Example

```
"pictures": [
    {
        "catalogPhoto": true,
        "layoutPicture": false,
        "mainPicture": true,
```

```
        "src": "https://ws.nausys.com/CBMS-external/rest/yachtModel/12625376/pictures/main.jpg"
    },
    {
        "catalogPhoto": false,
        "layoutPicture": true,
        "mainPicture": false,
        "src": "https://ws.nausys.com/CBMS-external/rest/yacht/29294997/pictures/layout.jpg"
    },
    {
        "catalogPhoto": false,
        "layoutPicture": false,
        "mainPicture": false,
        "src": "https://ws.nausys.com/CBMS-external/rest/yacht/29294997/pictures/P1.jpg"
    }
}
```

# RestYachtPrice 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long | unique id of pricelist |
| dateFrom | String | period from this price is valid in format <br> dd.MM.yyyy |
| dateTo | String | period to this price is valid in format <br> dd.MM.yyyy |
| price | Decimal | amount |
| currency | String |  |
| type | String | DAILY or WEEKLY |
| locationsId | Array of Long |  |

## Example

```
{
    "id":"29292922"
    "dateFrom": "01.01.2014",
    "dateTo": "23.05.2014",
    "price": 1050,
    "currency": "EUR",
    "type": "WEEKLY",
    "locationsId": [
        68
    ]
}
```

## RestYachtReservation

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long | Official reservation number |

|  uuid | String | Security code for web service actions on this reservation. NOTE: If the important data is changed on the reservation, the security code is changed also.  |
| --- | --- | --- |
|  reservationStatus | String | Status of the reservation: INFO - just an offer. Doesn't block the yacht in that period, OPTION, RESERVATION - fix booking, STORNO - cancelled option or booking  |
|  waitingForOption | Boolean | Optional  |
|  yachtld | Long | Details about the yacht.  |
|  yachtName | String |   |
|  baseFromld | Long | Charter base id of the embarkment base (to see list of all bases call All charter bases service)  |
|  baseTold | Long | Charter base id of the arrival base (to see list of all bases call All charter bases service)  |
|  locationFromld | Long | Location id of the embarkment base (to see list of all locations call All locations service)  |
|  locationTold | Long | Location id of the arrival base (to see list of all locations call All locations service)  |
|  periodFrom | DateTime1 | Period from with check in date (date format is dd.MM.yyyy HH:mm)  |
|  periodTo | DateTime1 | Period to with check out date (date format is dd.MM.yyyy HH:mm)  |
|  optionTill | String | Option valid till (dd.MM.yyyy HH:mm). Only if status is OPTION.  |
|  agency | String | Name of the agency  |
|  agencyVATID | String | VAT ID of the agency  |
|  client | RestClient | Info about the client.  |
|  discounts | Array of RestDiscount | Array of discounts applied on price list price  |
|  additionalEquipment | Array of RestYachtReservationAdditional Equipment | Array of selected additional equipment for this reservation. See RestYachtReserv ationAdditionalEquipment for more details  |
|  services | Array of RestYachtReservationService | Array of selected services at the base (includes obligatory services) for this reservation. See RestYachtReservationSer vice for more details  |
|  priceListPrice | String | Ground/basic price  |
|  agencyPrice | String | Final price expected from agency to pay  |
|  clientPrice | String | Final price expected from direct client to pay  |
|  currency | String | Currency of reservation  |
|  paymentCurrency | String | Currency in which online payment could be executed, possible values are HRK and EUR  |

<!-- Pages 291 - 300 -->

|  localizedFinalPrice | String | Client final price in paymentCurrency for online payment  |
| --- | --- | --- |
|  onlinePaymentAmount | String | Amount of first installment in paymentCurrency for online payment  |
|  approved | Boolean | If "false", than the subsequent option created via "createOption" request requires manual option approval by the Fleet Operator  |
|  crewlistlink | String |   |
|  createdDate | String |   |
|  paymentPlans | Array of RestYachtReservationPaymentPl an |   |
|  payments | Array of RestYachtReservationPayment |   |
|  useDepositPayment | Boolean |   |
|  numberOfPayments | Integer |   |
|  ownerBooking | Boolean | Only visible for charter companies  |
|  agencyAdditionalDiscountAmount | String | Additional discount deducted from agency commission amount  |
|  agencyClientFinalPrice | String | Client final booking price with additional discount from agency commission  |
|  bookingType | String | Possible values:
"BAREBOAT","CREWED","CABIN_MAIN","C ABIN_SUB","TRANSFER","BLOCK"  |
|  lastModifiedAt | DateTime 1 | last modify time (date format is dd.MM.yyyy HH:mm)  |
|  salesAgentId | Long |   |
|  salesAgentName | String |   |
|  domainId | Long | Only visible for charter companies  |
|  reservationMadeBy | Long | Only visible for charter companies  |
|  reservationMadeAt | DateTime 1 | reservation creation time (date format is dd.MM.yyyy HH:mm)  |
|  optionMadeBy | Long | Only visible for charter companies  |
|  optionMadeAt | DateTime 1 | option creation time (date format is dd.MM.yyyy HH:mm)  |
|  canceledBy | Long | Only visible for charter companies  |
|  canceledAt | DateTime 1 | storno creation time (date format is dd.MM.yyyy HH:mm)  |
|  effectiveAgencyCommissionAmountWith outVAT | String | only when there is agency on reservation  |
|  realization | String | only for NAT company $=$ Total price amount without vat  |
|  restYachtReservationComments | Array of RestComment | Array of yachtreservation comments that are visible to user (Deprecated by "comments")  |
|  securityDeposit | String | deposit amount that is paid before check in  |
|  comments | Array of RestComment | Array of yachtreservation comments that are visible to user  |

| agencyClient | RestClient | agency client details (which agency <br> entered) Only visible for charter <br> companies |
| :-- | :-- | :-- |
| skipperld | Long | Only visible for charter companies |
| hostessld | Long | Only visible for charter companies |
| cookld | Long | Only visible for charter companies |
| sailorld | Long | Only visible for charter companies |
| numberOfGuests | Integer | Only visible for charter companies |
| onlineBooking | Boolean | Only visible for charter companies |

# Evisibnxample 

```
{
    "additionalEquipment": [],
    "agencyPrice": "0.00",
    "approved": true,
    "baseFromId": 10253235,
    "baseToId": 10253235,
    "bookingType": "CABIN_MAIN",
    "clientPrice": "0.00",
    "createdDate": "12.10.2021",
    "crewlistlink": "https://crew.nausys.com/860029594/3f22399d92f8a729b799ae10ec1e2db1/",
    "currency": "EUR",
    "discounts": [],
    "domainId": 82053,
    "extendedOwnerBooking": false,
    "id": 860029594,
    "lastModifiedAt": "14.09.2022 10:39",
    "locationFromId": 482414,
    "locationToId": 482414,
    "numberOfPayments": 0,
"onlineBooking" : false,
    "optionMadeAt": "09.10.2021 12:27:21",
    "optionMadeBy": -1,
    "ownerBooking": false,
    "paymentCurrency": "EUR",
    "paymentPlans": [],
    "payments": [],
    "periodFrom": "06.06.2022 13:00",
    "periodTo": "13.06.2022 08:30",
    "priceListPrice": "0.00",
    "reservationMadeAt": "12.10.2021 10:41:40",
    "reservationMadeBy": 1737641,
    "reservationStatus": "RESERVATION",
    "salesAgentId": 1737641,
    "salesAgentName": "Lisa GRILLO",
    "services": [],
    "useDepositPayment": false,
    "uuid": "0d50eb33-2fe0-4fba-8d65-f834c06c10de",
    "yachtId": 10235782,
    "yachtName": "Lagoon 620 - 6 + 2 cab."
}
```

## RestYachtReservationAdditionalEquipment

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long |  |

| quantity | String | deprecated. Superseded by quantityExtra s and quantityPriceMeasure |
| :--: | :--: | :--: |
| listPrice | String | deprecated |
| currency | String |  |
| priceMeasureId | Long | Relates to Catalogue endpoint All price measures |
| equipmentld | Long | Relates to Catalogue endpoint All equipment |
| calculationType | String | Values: SEPARATE_PAYMENT, ADVANCE_PAYMENT |
| condition | RestInternationalText |  |
| amount | String |  |
| amountIsPercentage | Boolean |  |
| percentageCalculationType | String | Values: PRICELIST_PRICE, CLIENT_PRICE, AGENCY_PRICE, DAILY_PRICE ,PRICELIST_PRICE_WITHOUT_VAT |
| *minDuration | Integer | Defines conditional availability of equipment in relation to booking |
| *maxDuration | Integer | duration in days. Reservation duration <br> must fall between these two values for equipment to be available for usage. |
| totalPrice | String | Total calculated price for additional equipment |
| onPending | Boolean | This marks when equipment is added on INFO or OPTION status, and that equipment has defined quantity in a season. <br> While "on pending" status is "true" it will not be calculated in the charter price so it is only shown for informative purposes. <br> In the BOOKING stage "on pending" status will be removed and calculated in charter price if possible. |
| createdByld | Long | Relates to All users |
| createdTime | String | time when the service was created |
| modifiedAt | String | time when the service was modified |
| quantityExtras | Integer | quantity of the selected equipment item |
| quantityPriceMeasure | Integer | quantity of the price measure (per booking, per day etc.) used for price calculation |

# Example 

```
{
    "id": 473651,
    "quantity": "1.00",
    "listPrice": "0.00",
    "currency": "EUR",
    "priceMeasureId": 1,
```

"equipmentId": 476990,
"calculationType": "SEPARATE_PAYMENT",
"condition": {},
"amount": "0.15",
"amountIsPercentage": true,
"percentageCalculationType": "CLIENT_PRICE",
"minDuration": 7,
"maxDuration": 20
\}

# Example 2 

```
{
    "id": 473652,
    "quantity": "1.00",
    "listPrice": "50.00",
    "currency": "EUR",
    "priceMeasureId": 54,
    "equipmentId": 100609,
    "calculationType": "SEPARATE_PAYMENT",
    "condition": {},
    "amount": "50.00",
    "createdById": 1736448,
    "createdTime": "07.03.2023 09:34:59",
    "modifiedAt": "07.03.2023 10:04:24"
}
```

## RestYachtReservationBookingRequest

| Field | Type | Description |
| :-- | :-- | :-- |
| credentials | RestAuthentication |  |
| id | Long |  |
| uuid | String |  |
| payment | RestPayment |  |

| displayCurrency | String | optional parameter (defaults to "DEFAULT") <br> For charter company login possible values are: <br> "DEFAULT" (returns amounts in default reservation currency) <br> "CLIENT" (returns amounts in currency in which the client should pay to charter company) <br> For agency login possible values are: <br> "DEFAULT" (returns amounts in default reservation currency) <br> "CLIENT" (returns amounts in currency in which the client should pay to agency) <br> "COMPANY" (return amounts in currency in which the agency pays to charter company) <br> Important notice for agency login: <br> Selection of displayCurrency affects which payment plans and payments will be returned in the response. <br> If a paid agency selects "CLIENT" or "DEFAULT" displayCurrency, payments plans and payments from client towards agency will be returned. <br> If an agency selects "COMPANY" displayCurrency, payments plans and payments from agency towards charter company will be returned. <br> Otherwise no payment plans and payments will be returned. |
| :--: | :--: | :--: |

# Example 

```
{
"credentials": {
    "username": "xxx@xxxx",
    "password": "xxxxxxxx"
},
"id": "1",
    "uuid": 1,
    "payment": {
        "amount":"100",
        "currency":"EUR",
        "date":"03.09.2015",
        "paymentMethod":"CREDIT_CARD",
        "approvalCode":"XXX"}
```

\}

## RestYachtReservationExportRequest

| Field | Type | Description |
| :-- | :-- | :-- |
| credentials | RestAuthentication |  |
| string | periodFrom |  |
| string | periodTo |  |
| string | checkInFrom |  |

| string | checkInTo |  |
| :-- | :-- | :-- |

# Example 

\{"credentials": \{"username":"\$\{USERNAME\}", "password":"\$\{PASSWORD\}" \}, "periodFrom":"\$\{PERIOD_FROM\}", "periodTo":"\$\{PERIOD_TO\}", "checkInFrom":"01.01.2022", "checkInTo":"02.03.2022"\}

## RestYachtReservationExtra

| Field | Type | Description |
| :--: | :--: | :--: |
| id | Long |  |
| quantity | String |  |
| listPrice | String |  |
| currency | String |  |
| priceMeasureId | Long | Relates to Catalogue endpoint All price measures |
| extrald | Long | Id of Service or Additional equipment |
| calculationType | String | Values: SEPARATE_PAYMENT, ADVANCE_PAYMENT |
| condition | RestInternationalText |  |
| amount | String |  |
| totalPrice | String | Total calculated price for additional extras |
| amountIsPercentage | Boolean |  |
| percentageCalculationType | String | Values: PRICELIST_PRICE, CLIENT_PRICE, AGENCY_PRICE |
| minDuration | Integer | Defines conditional availability of extras in relation to booking duration in days. Reservation duration |
| maxDuration | Integer | must fall between these two values for extras to be available for usage. |
| extrasType | String | Define if given extras is SERVICE or EQUIPMENT |

## Example

```
{
    "id": 279942553,
    "quantity": "1.00",
    "listPrice": "120.00",
```

```
    "currency": "EUR",
    "priceMeasureId": 54,
    "extrald": 472548,
    "calculationType": "SEPARATE_PAYMENT",
    "condition": {
        "textIT": "i9"
    },
    "amount": "120.00",
    "minDuration": 7,
    "maxDuration": 13,
    "extrasType": "SERVICE",
    "totalPrice": "120.00"
}
```

# Example 2 

```
{
    "id": 279942554,
    "quantity": "1.00",
    "listPrice": "0.00",
    "currency": "EUR",
    "priceMeasureId": 101767,
    "extrald": 100504,
    "calculationType": "SEPARATE_PAYMENT",
    "condition": {},
    "amount": "0.03",
    "amountIsPercentage": true,
    "percentageCalculationType": "PRICELIST_PRICE"
}
```

## RestYachtReservationInfoRequest

| Field | Type | Description |
| :-- | :-- | :-- |
| credentials | RestAuthentication |  |
| client | RestClient | Once created, the client data can only be <br> updated through the Update contact enp <br> oint |
| yachtID | Long |  |
| agencyID | Long | Used only in case you are charter <br> operator, for agencies this field is <br> ignored |
| periodFrom | Date |  |
| periodTo | Date |  |
| services | Array of Long |  |

| equipment | Array of Long |  |
| :--: | :--: | :--: |
| onlinePayment | String | This parameter is TRUE only when info request is created for online booking payment, otherwise is FALSE |
| promoCode | String |  |
| numberOfPayments | Integer |  |
| paymentCurrency | String |  |
| useDepositPayment | String | This parameter not applicable for agency requests (defaults to FALSE for agency requests). <br> When ommited, this parameter defaults to FALSE. |
| agencyClientDiscountAmount | String | Used only by agency. Optional. <br> When used, must be used in combination with agencyClientDiscountAmountType field. <br> Example values: <br> - "50" (when <br> agencyClientDiscountAmountType=" <br> AMOUNT") <br> - "50" (when <br> agencyClientDiscountAmountType=" <br> PERCENTAGE") |
| agencyClientDiscountAmountType | String | Used only by agency. Optional. <br> When used, must be used in combination with agencyClientDiscountAmount field. <br> Possible values: <br> - "PERCENTAGE" <br> - "AMOUNT" |
| displayCurrency | String | Optional parameter (defaults to "DEFAULT") <br> For charter company login possible values are: <br> "DEFAULT" (returns amounts in default reservation currency) <br> "CLIENT" (returns amounts in currency in which the client should pay to charter company) <br> For agency login possible values are: <br> "DEFAULT" (returns amounts in default reservation currency) <br> "CLIENT" (returns amounts in currency in which the client should pay to agency) <br> "COMPANY" (return amounts in currency in which the agency pays to charter company) |
| overrideClientData | Boolean | If client already exist gives possibility to override his personal information. |
| additionalDiscountltem | RestAdditionalDiscountltem | available only for charter companies. Opt ional. |
| numberOfGuests | Integer | Optional |

Example

```
{
"client": {
"name": "Rest",
    "surname": "client",
    "company": "false",
    "vatNr": "",
    "address": "address",
    "zip": "",
    "city": "",
    "countryId": 1,
    "email": "someone@something.some",
    "phone": "",
    "mobile": "",
    "skype": "" },
    "credentials": {
        "password": "xxx@xxxx",
        "username": "xxxxxxxxx"
        },
"periodFrom": "26.09.2015",
    "periodTo": "03.10.2015",
    "yachtID": 101949,
"onlinePayment":"false",
"additionalDiscountItem": {
"id": 11718712,
    "amount": "12",
    "type": "PERCENTAGE"
}
}
```

RestYachtReservationList

# Definition 

| Field | Type | Description |
| :-- | :-- | :-- |
| status | String |  |
| errorCode | Number | Displays only if error occurred |
| reservations | Array of RestYachtReservation |  |

## Example

```
{"status": "OK",
    "reservations": [
        {"id": 1961789,
            "uuid": "6d1bc4d4-5fd8-44b8-a4d3-d4e7b0225955",
            "reservationStatus": "RESERVATION",
            "yachtId": 829589,
            "periodFrom": "30.05.2015 17:00",
            "periodTo": "06.06.2015 08:30",
            "agency": "zzzzzzzzzzzzzzzzzzzzzzzz",
            "client": {
            "name": "yyyyyyyyyyyyyyyyy",
            "surname": "xxxxxxxxxxxxxxxx",
            "countryId": 100158
        },
        "discounts": [
            {
                "discountItemId": 1,
                "amount": 10.00,
```

```
        "type": "PERCENTAGE"
    }
    ],
    "additionalEquipment": [
        {
            "id": 116333,
            "quantity": "1.00",
            "listPrice": "10.00",
            "priceMeasureId": 1,
            "equipmentId": 14,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": [
        }
    ],
    "services": [
        {
            "id": 2315437,
            "quantity": "1.00",
            "listPrice": "160.00",
            "priceMeasureId": 54,
            "serviceId": 3,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": [
            "textDE": "enthalten: Endreinigung, Taucher Inspektion, Gas, Bettwäsche, Tücher, kroatisch Mobiltelefon (nur für den
internen Gebrauch), Basispaket für Toiletten und Küche",
                    "textEN": "includes: Final cleaning, divers inspection, gas, bedding, cloths, croatian mobile phone (for internal usage
only), basic package for toilets and kitchen",
                    "textHR": "uključuje: završno čišćenje, podvodnu inspekciju, plin, plahte, kuh.krpe, hrv.mobilni telefon (samo za
internu uporabu), osnovni paket za toalet i kuhinju"
        }
    },
    {
        "quantity": "1.00",
        "listPrice": "10.00",
        "priceMeasureId": 54,
        "serviceId": 477980,
        "calculationType": "ADVANCE_PAYMENT",
        "condition": [
            "textDE": "GRATIS",
            "textEN": "GRATIS",
            "textHR": "GRATIS"
        }
    }
    ],
    "priceListPrice": "3340.00",
    "agencyPrice": "2606.97",
    "clientPrice": "3006.00",
    "paymentCurrency": "EUR",
    "approved": true
    },
    {
    "id": 1976935,
    "uuid": "2a1bc4d4-5fd8-44b8-a4d3-d4e7b0225445",
    "reservationStatus": "RESERVATION",
    "yachtId": 838604,
    "periodFrom": "30.05.2015 17:00",
    "periodTo": "06.06.2015 08:30",
    "agency": "test agency",
    "client": [
        "name": "Nino",
        "surname": "Baumann"
    },
    "discounts": [
        {
            "discountItemId": 104351,
            "amount": 8.00,
            "type": "PERCENTAGE"
        }
    ],
    "additionalEquipment": [
        {
```

<!-- Pages 301 - 310 -->

```
            "id": 116684,
            "quantity": "1.00",
            "listPrice": "10.00",
            "priceMeasureId": 1,
            "equipmentId": 14,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": {
            }
        },
        {
            "id": 118883,
            "quantity": "3.00",
            "listPrice": "5.00",
            "priceMeasureId": 101939,
            "equipmentId": 12,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": {
            }
        }
    ],
    "services": [
        {
            "id": 2334644,
            "quantity": "1.00",
            "listPrice": "130.00",
            "priceMeasureId": 54,
            "serviceId": 101958,
            "calculationType": "SEPARATE_PAYMENT",
            "condition": {
            }
        },
        {
            "id": 2334645,
            "quantity": "1.00",
            "listPrice": "77.00",
            "priceMeasureId": 109923,
            "serviceId": 52,
            "calculationType": "INCLUDED_IN_PRICE",
            "condition": {
                "textIT": "it2"
            }
        }
    ],
    "priceListPrice": "2250.00",
    "agencyPrice": "1734.89",
    "clientPrice": "2070.00",
    "paymentCurrency": "EUR",
    "approved": true
    }
}
```

# RestYachtReservationOccupancy 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long | ID of the reservation |
| yachtld | Long | ID of the yacht |
| masterYachtld | Long | ID of master yacht |
| locationFromld | Long | ID of location of the starting charter base <br> Relates to Catalogue endpoint All charter <br> bases |

| locationTold | Long | ID of location of the ending charter base <br> Relates to Catalogue endpoint All charter <br> bases |
| :-- | :-- | :-- |
| reservationType | String | OPTION \| RESERVATION \| SERVICE |
| periodFrom | Date | date period from of reservation in format <br> dd.MM.yyyy |
| checkInTime | Time2 | check-in time in format HH:mm:ss |
| periodTo | Date | date period to of reservation in format <br> dd.MM.yyyy |
| checkOutTime | Time2 | check-out time in format HH:mm:sss |
| optionValidTill | DateTime2 | existing only if reservationType is <br> OPTION <br> date of option expiration in format <br> dd.MM.yyyy HH:mm:ss |

# Example 

```
{
    "id": 4068802,
    "yachtId": 481881,
    "locationFromId": 62,
    "locationTold": 62,
    "reservationType": "OPTION",
    "periodFrom": "26.09.2015",
    "checkInTime": "15:00:00",
    "periodTo": "03.10.2015",
    "checkOutTime": "09:00:00",
    "optionValidTill": "24.08.2015 23:59:59"
}
```

## RestYachtReservationOccupancyList

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| companyId | Long | id of the charter company |
| year | Number | season (year) of shown reservations |
| reservations | List<RestYachtReservationOccupancy> | list of reservations |

## Example

```
{
"companyId":201,
"year":2013,
"reservations":
[
"id":783023,
"yachtId":302,
"locationFromId":201,
"locationToId":201,
"reservationType":"RESERVATION",
"periodFrom":"24.04.2013",
"checkInTime":"15:00:00",
"periodTo":"27.04.2013",
"checkOutTime":"09:00:00"
},{{
"id":1121313,
"yachtId":302,
"locationFromId":201,
"locationToId":201,
"reservationType":"OPTION",
"periodFrom":"05.10.2013",
"checkInTime":"15:00:00",
"periodTo":"26.10.2013",
"checkOutTime":"09:00:00",
"optionValidTill":"25.10.2013 23:59:59"
}
}
}
```

# RestYachtReservationOnlinePaymentRequest 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| credentials | RestAuthentication |  |
| id | Long |  |
| uuid | String |  |
| language | String |  |
| successUrl | String | Redirect to company site upon <br> successful payment |
| rejectedUrl | String | Redirect to company site upon error with <br> payment |

| displayCurrency | String | Optional parameter (defaults to "DEFAULT") <br> For charter company login possible values are: <br> "DEFAULT" (returns amounts in default reservation currency) <br> "CLIENT" (returns amounts in currency in which the client should pay to charter company) <br> For agency login possible values are: <br> "DEFAULT" (returns amounts in default reservation currency) <br> "CLIENT" (returns amounts in currency in which the client should pay to agency) <br> "COMPANY" (return amounts in currency in which the agency pays to charter company) <br> Important notice for agency login: <br> Selection of displayCurrency affects which payment plans and payments will be returned in the response. <br> If a paid agency selects "CLIENT" or "DEFAULT" displayCurrency, payments plans and payments from client towards agency will be returned. <br> If an agency selects "COMPANY" displayCurrency, payments plans and payments from agency towards charter company will be returned. <br> Otherwise no payment plans and payments will be returned. |
| :--: | :--: | :--: |

# Example 

```
{
    "credentials": {
        "username": "xxx@xxxx",
        "password": "xxxxxxxxx" },
    "id": 1,
    "uuid": "1"
    "language": "CROATIAN",
    "rejectedUrl": "https://www.companysite.com/error",
    "successUrl": "https://www.companysite.com/success"
}
```

## RestYachtReservationOnlinePaymentResponse

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| status | String |  |
| errorCode | Number | Displays only if error occurred |
| url | String | Payment URL - redirect to payment <br> gateway |

## Example

status: "OK", url: "https://payment.nausys.com/NauSYS-payment/payment/v1/public/paymentForm/123-123456789" \}

# RestYachtReservationOptionRequest 

| Field | Type | Description |
| :--: | :--: | :--: |
| credentials | RestAuthentication |  |
| id | Long |  |
| uuid | String |  |
| createWaitingOption | String | Required parameter. "true" or "false" |
| displayCurrency | String | optional parameter (defaults to "DEFAULT") <br> For charter company login possible values are: <br> "DEFAULT" (returns amounts in default reservation currency) <br> "CLIENT" (returns amounts in currency in which the client should pay to charter company) <br> For agency login possible values are: <br> "DEFAULT" (returns amounts in default reservation currency) <br> "CLIENT" (returns amounts in currency in which the client should pay to agency) <br> "COMPANY" (return amounts in currency in which the agency pays to charter company) |
| fallbackToWaitingOption | Boolean | Replaces createWaitingOption which is now deprecated. If a boat is already under option, setting this parameter to tr $\underline{\text { ue }}$ will create a Waiting option on the boat. |

## Example

```
{
"credentials":
{
    "username": "xxx@xxxx",
    "password": "xxxxxxxxx"
    },
    "id": 265990764,
    "uuid": "4bc44966-cdb6-42f5-aaa9-3cd1907612c4",
    "createWaitingOption": "false"
}
```

## RestYachtReservationPayment

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long |  |
| date | String |  |

| amount | String |  |
| :-- | :-- | :-- |
| amountInPaymentCurrency | String |  |
| paymentCurrency | String |  |

# Example 

```
"payments": [
    {
        "id": 528101,
        "date": "02.03.2020",
        "amount": "500.00",
        "amountInPaymentCurrency": "500.00",
        "paymentCurrency": "EUR"
    },
    {
        "id": 528102,
        "date": "02.03.2020",
        "amount": "945.00",
        "amountInPaymentCurrency": "945.00",
        "paymentCurrency": "EUR"
    }
]
```

## RestYachtReservationPaymentPlan

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long |  |
| date | String |  |
| amount | String |  |
| amountInPaymentCurrency | String |  |
| paid | Boolean |  |
| onlinePaymentLink | String |  |
| onlinePaymentLinkValidTill | String |  |

## Example

```
"paymentPlans": [
    {
        "id": 257940759,
        "date": "26.01.2020",
        "amount": "748.79",
        "amountInPaymentCurrency": "5573.50",
        "paid": false,
        "onlinePaymentLink": "https://payment.e-ured.com/SITPaymentGateway/api/v1/public/paymentForm/4g4fz64g4gn64v4vgh
54jj6efhk63fdg573gjku",
```

"onlinePaymentLinkValidTill": "23.02.2020 10:36" \} }

# RestYachtReservationPriceInfo

## Definition

|  Field | Type | Description  |
| --- | --- | --- |
|  priceListPrice | String |   |
|  clientPrice | String |   |
|  currency | String |   |
|  discounts | Array of RestDiscount |   |
|  depositAmount | String |   |
|  depositWhenInsuredAmount | String | Amount of agency commission defined
between fleet operator and broker  |
|  agencyCommission | String |   |

## Example

[ "priceListPrice": "5250.00", "clientPrice": "4239.37", "currency": "EUR", "depositAmount": "4000.00", "depositWhenInsuredAmount": "600.00", "agencyCommission": "398.23", "discounts": [ "discountItemId": 930176, "amount": 15.00, "type": "PERCENTAGE" ], [ "discountItemId": 5, "amount": 5.00, "type": "PERCENTAGE" ] ] }

## RestYachtReservationRequest

## Definition

|  Field | Type | Description  |
| --- | --- | --- |
|  credentials | RestAuthentication |   |
|  id | Long |   |
|  uuid | String |   |

| displayCurrency | String | Optional parameter (defaults to "DEFAULT") <br> For charter company login possible values are: <br> "DEFAULT" (returns amounts in default reservation currency) <br> "CLIENT" (returns amounts in currency in which the client should pay to charter company) <br> For agency login possible values are: <br> "DEFAULT" (returns amounts in default reservation currency) <br> "CLIENT" (returns amounts in currency in which the client should pay to agency) <br> "COMPANY" (return amounts in currency in which the agency pays to charter company) <br> Important notice for agency login: <br> Selection of displayCurrency affects which payment plans and payments will be returned in the response. <br> If a paid agency selects "CLIENT" or "DEFAULT" displayCurrency, payments plans and payments from client towards agency will be returned. <br> If an agency selects "COMPANY" displayCurrency, payments plans and payments from agency towards charter company will be returned. <br> Otherwise no payment plans and payments will be returned. |
| :--: | :--: | :--: |

# Example 

```
{
    "credentials": {
        "username": "xxx@xxxx",
        "password": "xxxxxxxxx"
    },
    "id": 1,
    "uuid": "xxxxxxxada13as"
}
```

## RestYachtReservationService

| Field | Type | Description |
| :-- | :-- | :-- |
| id | Long |  |
| quantity | String | deprecated. Superseded by quantityExtra <br> s and quantityPriceMeasure |
| listPrice | String | deprecated |
| currency | String |  |
| priceMeasureId | Long | Relates to Catalogue endpoint All price <br> measures |

|  serviceld | Long | Relates to Catalogue endpoint All services  |
| --- | --- | --- |
|  calculationType | String | Values: SEPARATE_PAYMENT, ADVANCE_PAYMENT, INCLUDED_IN_PRICE  |
|  condition | RestInternationalText |   |
|  amount | String |   |
|  amountIsPercentage | Boolean |   |
|  percentageCalculationType | String | Values: PRICELIST_PRICE, CLIENT_PRICE, AGENCY_PRICE, DAILY_PRICE ,PRICELIST_PRICE_WITHOUT_VAT  |
|  *minDuration | Integer | Defines conditional availability of service in relation to booking duration in days. Reservation duration  |
|  *maxDuration | Integer | must fall between these two values for service to be available for usage.  |
|  totalPrice | String | Total calculated price for service  |
|  createdByld | Long | Relates to All users  |
|  createdTime | String | time when the service was created  |
|  modifiedAt | String | time when the service was modified  |
|  quantityExtras | Integer | quantity of the selected service item  |
|  quantityPriceMeasure | Integer | quantity of the price measure (per booking, per day etc.) used for price calculation  |

# Example

```
{
    "id": 279942553,
    "quantity": "1.00",
    "listPrice": "120.00",
    "currency": "EUR",
    "priceMeasureId": 54,
    "serviceld": 472548,
    "calculationType": "SEPARATE_PAYMENT",
    "condition": {
        "textIT": "i9"
    },
    "amount": "120.00",
    "minDuration": 7,
    "maxDuration": 13
}
```

Example 2

"id": 279942554, "quantity": "1.00", "listPrice": "0.00", "currency": "EUR", "priceMeasureId": 101767, "serviceId": 100504, "calculationType": "SEPARATE_PAYMENT", "condition": {}, "amount": "0.03", "amountIsPercentage": true, "percentageCalculationType": "PRICELIST_PRICE", "createdById": 1736448, "createdTime": "07.03.2023 09:34:59", "modifiedAt": "07.03.2023 10:04:24" }

# RestYachtReservationsRequest

## Definition

|  Field | Type | Description  |
| --- | --- | --- |
|  credentials | RestAuthentication |   |
|  periodFrom | Date | min check-in date (ignored if reservation
ids sent)  |
|  periodTo | Date | max check-in date (ignored if
reservation ids sent)  |
|  endDateFrom | Date | min check-out date (ignored if
reservation ids sent)  |
|  endDateTo | Date | max check-out date (ignored if
reservation ids sent)  |
|  includeWaitingOptions | Boolean | Optional parameter. Used to display
waiting options. true or false.  |
|  reservations | Array of Long | Reservation IDs  |
|  modifyTimeFrom | DateTime1 | min modify time (ignored if reservation
ids sent)  |
|  modifyTimeTo | DateTime1 | max modify time (ignored if reservation
ids sent)  |

<!-- Pages 311 - 317 -->

| displayCurrency | String | Optional parameter (defaults to "DEFAULT") <br> For charter company login possible values are: <br> "DEFAULT" (returns amounts in default reservation currency) <br> "CLIENT" (returns amounts in currency in which the client should pay to charter company) <br> For agency login possible values are: <br> "DEFAULT" (returns amounts in default reservation currency) <br> "CLIENT" (returns amounts in currency in which the client should pay to agency) <br> "COMPANY" (return amounts in currency in which the agency pays to charter company) <br> Important notice for agency login: <br> Selection of displayCurrency affects which payment plans and payments will be returned in the response. <br> If a paid agency selects "CLIENT" or "DEFAULT" displayCurrency, payments plans and payments from client towards agency will be returned. <br> If an agency selects "COMPANY" displayCurrency, payments plans and payments from agency towards charter company will be returned. <br> Otherwise no payment plans and payments will be returned. |
| :--: | :--: | :--: |

# Example 

```
{
    "credentials": {
        "username": "xxx@xxxxx",
        "password": "xxxxxxxxx"
    },
    "reservations":[1001552,1001553,1001555]
}
or
{
    "credentials": {
        "username": "xxx@xxxxx",
        "password": "xxxxxxxxx"
    },

"periodFrom":"23.05.2013",
"periodTo":"23.05.2013"
\}
or
\{
"credentials": \{
"username": "xxx@xxxxx",
"password": "xxxxxxxxx"
\},
"endDateFrom":"23.05.2022",
"endDateTo":"23.05.2022"
\}
or
\{
"credentials": \{
"username": "xxx@xxxxx",
"password": "xxxxxxxxx" \},
"periodFrom":"09.03.2019",
"periodTo":"16.03.2019",
"includeWaitingOptions": true
\}

# RestYachtSeason 

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| seasonld | Long | Relates to Catalogue endpoint All <br> seasons |
| baseld | Long | Relates to Catalogue endpoint All charter <br> bases |
| locationld | Long | Relates to Catalogue endpoint All <br> locations |
| additionalYachtEquipment | Array of RestYachtAdditionalEquipmentP <br> rice |  |
| services | Array of RestYachtServicePrice |  |
| prices | Array of RestYachtPrice |  |
| regularDiscounts | Array of RestDiscount |  |

## Example

$\{$

```
"seasonId": 7204018,
"baseId": 201,
"locationId": 55,
"additionalYachtEquipment": [
    {
        "id": 14247,
        "quantity": 1,
        "price": "80.00",
        "currency": "EUR",
        "equipmentId": 19,
        "comment": {},
        "priceMeasureId": 1,
        "calculationType": "SEPARATE_PAYMENT",
        "condition": {}
    },
    {
        "id": 14248,
        "quantity": 1,
        "price": "80.00",
        "currency": "EUR",
        "equipmentId": 51,
        "comment": {},
        "priceMeasureId": 1,
        "calculationType": "SEPARATE_PAYMENT",
        "condition": {}
    },
    {
        "id": 7755103,
        "quantity": 1,
        "price": "0.00",
        "currency": "EUR",
        "equipmentId": 476990,
        "comment": {},
        "priceMeasureId": 1,
        "calculationType": "SEPARATE_PAYMENT",
        "condition": {},
        "amount": "0.15",
        "amountIsPercentage": true,
        "percentageCalculationType": "CLIENT_PRICE"
    }
```

```
],
"services": [
{
    "id": 502399,
    "serviceld": 53,
    "price": "50.00",
    "currency": "EUR",
    "priceMeasureld": 54,
    "calculationType": "SEPARATE_PAYMENT",
    "description": {},
    "obligatory": false
    },
    {
        "id": 7755065,
        "serviceld": 100504,
        "price": "0.00",
        "currency": "EUR",
        "priceMeasureld": 101767,
        "calculationType": "SEPARATE_PAYMENT",
        "description": {},
        "obligatory": false,
        "amount": "0.03",
        "amountIsPercentage": true,
        "percentageCalculationType": "PRICELIST_PRICE"
    },
    {
        "id": 502400,
        "serviceld": 101660,
        "price": "150.00",
        "currency": "EUR",
        "priceMeasureld": 54,
        "calculationType": "SEPARATE_PAYMENT",
        "description": {
            "textDE": "+ 200 EUR refundable",
            "textEN": "+ 200 EUR refundable",
            "textHR": "+ 200 EUR povratno"
        },
        "obligatory": false
    }
],
"prices": [
```

```
    {
    "dateFrom": "01.01.2014",
    "dateTo": "23.05.2014",
    "price": 930,
    "currency": "EUR",
    "type": "WEEKLY",
    "locationsId": [
        68
    ]
    },
    {
    "dateFrom": "20.09.2014",
    "dateTo": "31.12.2014",
    "price": 930,
    "currency": "EUR",
    "type": "WEEKLY",
    "locationsId": [
        68
    ]
    }
],
    "regularDiscounts": [
    {
        "discountItemId": 1,
        "amount": 5,
        "type": "PERCENTAGE"
    },
    {
        "discountItemId": 100509,
        "amount": 5,
        "type": "PERCENTAGE"
    }
    ]
}
```

# RestYachtServicePrice 

| Field | Type | Description |
| :-- | :-- | :-- |

| id | Long |  |
| :--: | :--: | :--: |
| serviceld | Long | Used to fetch service name. <br> Relates to Catalogue endpoint All services |
| price | String | deprecated |
| currency | String |  |
| priceMeasureld | Long | Relates to Catalogue endpoint All price measures |
| calculationType | String | Values: SEPARATE_PAYMENT, ADVANCE_PAYMENT |
| description | RestInternationalText |  |
| obligatory | Boolean |  |
| amount | String | currency: 2 decimal places, percentage: 4 decimal places |
| amountIsPercentage | Boolean |  |
| percentageCalculationType | String | Values: PRICELIST_PRICE, CLIENT_PRICE, AGENCY_PRICE, DAILY_PRICE ,PRICELIST_PRICE_WITHOUT_VAT |
| validPeriodFrom | String | start date of the period this service item applies to |
| validPeriodTo | String | end date of the period this service item applies to |
| validMinPax | Integer | minimum number of persons this service item applies to |
| validMaxPax | Integer | maximum number of persons this service item applies to |
| validForBases | Array of Long | baseFrom of the current reservation (if empty, applies to all bases) |
| minimumPrice | String | minimum price set for this service item if the total amount is less then minimumPrice |
| minDuration | Integer | Defines conditional availability of service in relation to booking duration in days. |
| maxDuration | Integer | Reservation duration <br> must fall between these two values for service to be available for usage. |
| onRequestOnly | Boolean | If true service is available only on YachtReservation type: (Reservation Type: RESERVATION) |

# Example 1 

```
{
"id": 102769,
"serviceId": 2,
"price": "110.00",
"currency": "EUR",
"priceMeasureId": 55,
"calculationType": "SEPARATE_PAYMENT",
```

"description": {}, "obligatory": false, "amount": "110.00", "minDuration": 7, "maxDuration": 13

# Example 2 

```
{
    "id": 7755065,
    "serviceld": 100504,
    "price": "0.00",
    "currency": "EUR",
    "priceMeasureId": 101767,
    "calculationType": "SEPARATE_PAYMENT",
    "description": {},
    "obligatory": false,
    "amount": "0.0300",
    "amountIsPercentage": true,
    "percentageCalculationType": "PRICELIST_PRICE"
}
```

## VatItem

## Definition

| Field | Type | Description |
| :-- | :-- | :-- |
| rate | String | tax percentage |
| basealt | String | tax calculation base in home currency |
| totalalt | String | tax amount in home currency |

## Example

```
<vat>
<item rate="10.00" basealt="4380.99" totalalt="438.10"/>
<item rate="25.00" basealt="6927.44" totalalt="1731.86"/>
</vat>
/**
  * @module AutomartLib
  *
  * Auto Mart is an online marketplace for automobiles of diverse makes, model or body type. With
  * Auto Mart, users can sell their cars or buy from trusted dealerships or private sellers.
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const MiscController = require('./Controllers/MiscController');
const LoginRequest = require('./Models/LoginRequest');
const CreatePurchaseOrderRequest = require('./Models/CreatePurchaseOrderRequest');
const UpdateThePriceOfACarAdRequest = require('./Models/UpdateThePriceOfACarAdRequest');
const UpdatePriceOfAPurchaseOrderRequest = require('./Models/UpdatePriceOfAPurchaseOrderRequest');
const MarkPostedAdAsSoldRequest = require('./Models/MarkPostedAdAsSoldRequest');
const SignupRequest = require('./Models/SignupRequest');
const PostAdRequest = require('./Models/PostAdRequest');
const FlagAPostedCarAdRequest = require('./Models/FlagAPostedCarAdRequest');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of AutomartLib
    Configuration,
    Environments,
    // controllers of AutomartLib
    MiscController,
    // models of AutomartLib
    LoginRequest,
    CreatePurchaseOrderRequest,
    UpdateThePriceOfACarAdRequest,
    UpdatePriceOfAPurchaseOrderRequest,
    MarkPostedAdAsSoldRequest,
    SignupRequest,
    PostAdRequest,
    FlagAPostedCarAdRequest,
    // exceptions of AutomartLib
    APIException,
};

module.exports = initializer;

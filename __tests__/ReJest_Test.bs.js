// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");

describe("Describe", (function () {
        describe.skip("skip", (function () {
                test("skip", (function () {
                        return expect(42).toEqual(42);
                      }));
                
              }));
        describe.each([
                "a",
                "b",
                "c"
              ])("test", (function (value) {
                test("each1", (function () {
                        return expect(value).toEqual(value);
                      }));
                
              }));
        describe.each([
                [
                  1,
                  "1"
                ],
                [
                  2,
                  "2"
                ],
                [
                  3,
                  "3"
                ]
              ])("each2", (function (a, b) {
                test("each2", (function () {
                        return expect(String(a)).toEqual(b);
                      }));
                
              }));
        describe.each([
                [
                  1,
                  "1",
                  1
                ],
                [
                  2,
                  "2",
                  2
                ],
                [
                  3,
                  "3",
                  3
                ]
              ])("each3", (function (a, _b, c) {
                test("each3", (function () {
                        return expect(Caml_format.caml_int_of_string(String(a))).toEqual(c);
                      }));
                
              }));
        describe.each([
                [
                  1,
                  "1",
                  1,
                  "1"
                ],
                [
                  2,
                  "2",
                  2,
                  "2"
                ],
                [
                  3,
                  "3",
                  3,
                  "3"
                ]
              ])("each4", (function (a, _b, _c, d) {
                test("each4", (function () {
                        return expect(String(Caml_format.caml_int_of_string(String(a)))).toEqual(d);
                      }));
                
              }));
        return describe.each([
                      [
                        1,
                        "1",
                        1,
                        "1",
                        1
                      ],
                      [
                        2,
                        "2",
                        2,
                        "2",
                        2
                      ],
                      [
                        3,
                        "3",
                        3,
                        "3",
                        3
                      ]
                    ])("each5", (function (a, _b, _c, _d, e) {
                      test("each5", (function () {
                              return expect(Caml_format.caml_int_of_string(String(Caml_format.caml_int_of_string(String(a))))).toEqual(e);
                            }));
                      
                    }));
      }));

describe("Test globals", (function () {
        test("test", (function () {
                return expect(42).toEqual(42);
              }));
        test("testPromise", (function () {
                return Promise.resolve(expect(42).toEqual(42));
              }));
        test("testPromiseTimeout", (function () {
                return Promise.resolve(expect(42).toEqual(42));
              }), 0);
        test("testAsync", (function (onDone) {
                expect(42).toEqual(42);
                return Curry._1(onDone, undefined);
              }));
        test("testAsyncTimeout", (function () {
                return Promise.resolve(expect(42).toEqual(42));
              }), 0);
        
      }));

describe("Test", (function () {
        test("it", (function (onDone) {
                expect(42).toEqual(42);
                return Curry._1(onDone, undefined);
              }));
        test("itPromise", (function () {
                return Promise.resolve(expect(42).toEqual(42));
              }));
        test.each([
                "a",
                "b"
              ])("eachAsync1", (function (a, onDone) {
                setTimeout((function (param) {
                        expect(a).toEqual(a);
                        return Curry._1(onDone, undefined);
                      }), 0);
                
              }));
        test.each([
                [
                  1,
                  "1"
                ],
                [
                  2,
                  "2"
                ]
              ])("eachAsync2", (function (a, b, onDone) {
                setTimeout((function (param) {
                        expect(String(a)).toEqual(b);
                        return Curry._1(onDone, undefined);
                      }), 0);
                
              }));
        test.each([
                [
                  1,
                  "1",
                  1
                ],
                [
                  2,
                  "2",
                  2
                ]
              ])("eachAsync3", (function (a, _b, c, onDone) {
                setTimeout((function (param) {
                        expect(Caml_format.caml_int_of_string(String(a))).toEqual(c);
                        return Curry._1(onDone, undefined);
                      }), 0);
                
              }));
        test.each([
                [
                  1,
                  "1",
                  1,
                  "1"
                ],
                [
                  2,
                  "2",
                  2,
                  "2"
                ]
              ])("eachAsync4", (function (a, _b, _c, d, onDone) {
                setTimeout((function (param) {
                        expect(String(Caml_format.caml_int_of_string(String(a)))).toEqual(d);
                        return Curry._1(onDone, undefined);
                      }), 0);
                
              }));
        return test.each([
                      [
                        1,
                        "1",
                        1,
                        "1",
                        1
                      ],
                      [
                        2,
                        "2",
                        2,
                        "2",
                        2
                      ]
                    ])("eachAsync5", (function (a, _b, _c, _d, e, onDone) {
                      setTimeout((function (param) {
                              expect(Caml_format.caml_int_of_string(String(Caml_format.caml_int_of_string(String(a))))).toEqual(e);
                              return Curry._1(onDone, undefined);
                            }), 0);
                      
                    }));
      }));

describe("Mock", (function () {
        test("make", (function () {
                var mock = jest.fn(function (str) {
                      return str + "";
                    });
                Curry._1(mock, "Hello");
                Curry._1(mock, "Green");
                Curry._1(mock, "Last");
                expect(mock).toBeCalled();
                expect(mock).toBeCalledTimes(3);
                expect(mock).toHaveBeenNthCalledWith(1, "Hello");
                expect(mock).toHaveNthReturnedWith(1, "Hello");
                expect(mock).toHaveBeenNthCalledWith(2, "Green");
                expect(mock).toHaveNthReturnedWith(2, "Green");
                expect(mock).toHaveBeenLastCalledWith("Last");
                return expect(mock).toHaveLastReturnedWith("Last");
              }));
        
      }));

/*  Not a pure module */

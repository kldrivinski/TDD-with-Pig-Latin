const scriptExports = require('./script');

const { translate } = scriptExports;


describe("test translate", function () {
    it("first letter vowel", function () {
        let result = translate("ok");
        expect(result).toBe("okway")
    })

    it("first letter vowel", function () {
        let result = translate("yoink");
        expect(result).toBe("oinkyay")
    })

    it("first letter vowel", function () {
        let result = translate("thrice");
        expect(result).toBe("icethray")
    })


})
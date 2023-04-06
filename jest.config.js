module.exports = {
  preset: "jest-expo",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@Screens/(.*)$": "<rootDir>/src/Screens/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1"	
  }
};
import XCTest
import SwiftTreeSitter
import TreeSitterskript

final class TreeSitterskriptTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_skript())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading skript grammar")
    }
}

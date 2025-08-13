// swift-tools-version:5.3
import PackageDescription

let package = Package(
    name: "TreeSitterskript",
    products: [
        .library(name: "TreeSitterskript", targets: ["TreeSitterskript"]),
    ],
    dependencies: [
        .package(url: "https://github.com/ChimeHQ/SwiftTreeSitter", from: "0.8.0"),
    ],
    targets: [
        .target(
            name: "TreeSitterskript",
            dependencies: [],
            path: ".",
            sources: [
                "src/parser.c",
                "src/scanner.c"
            ],
            resources: [
                .copy("queries")
            ],
            publicHeadersPath: "bindings/swift",
            cSettings: [.headerSearchPath("src")]
        ),
        .testTarget(
            name: "TreeSitterskriptTests",
            dependencies: [
                "SwiftTreeSitter",
                "TreeSitterskript",
            ],
            path: "bindings/swift/TreeSitterskriptTests"
        )
    ],
    cLanguageStandard: .c11
)

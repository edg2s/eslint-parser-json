const {test} = require('../testSandbox');
const {parseJson} = require('../../lib/parseJson');

const parserOptions = {
    ecmaVersion: undefined,
    loc: true,
    range: true,
    raw: true,
    tokens: true,
    comment: true,
    eslintVisitorKeys: true,
    eslintScopeManager: true,
    filePath: 'test.json'
}

test('parseJson returns AST', expect => {
    // Given
    const code = createJson();

    // When
    const parseObject = parseJson(code, parserOptions);

    // Then
    expect.truthy(parseObject.ast);
});

/**
 * @returns {string}
 */
function createJson() {
    const data = {
        planets: [
            {
                name: 'Mars',
                color: 'red'
            },
            {
                name: 'Earth',
                moons: 1,
                dinos: [],
                hasOxygen: true,
            }
        ]
    };

    return JSON.stringify(data, null, 4);
}

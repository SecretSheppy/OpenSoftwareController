(function () {

    /**
     * Markdown parser
     *
     * A simple Markdown parser that uses regular expressions to parse markdown
     * into html. This is obviously not the best implementation of a parser,
     * but it was a quick solution for the initial version of the project. It
     * will be replaced with a more robust solution in the future.
     */

    'use strict';

    const RULES = [

        // Headers
        [/#{6}\s?(.+)/g, "<h6>$1</h6>"],
        [/#{5}\s?(.+)/g, "<h5>$1</h5>"],
        [/#{4}\s?(.+)/g, "<h4>$1</h4>"],
        [/#{3}\s?(.+)/g, "<h3>$1</h3>"],
        [/#{2}\s?(.+)/g, "<h2>$1</h2>"],
        [/#\s?(.+)/g, "<h1>$1</h1>"],

        // Bold
        [/\*{2}(.+)\*{2}/g, "<strong>$1</strong>"],
        [/_{2}(.+)_{2}/g, "<strong>$1</strong>"],

        // Italic
        [/\*(.+)\*/g, "<em>$1</em>"],
        [/_(.+)_/g, "<em>$1</em>"],

        // Strikethrough
        [/~{2}(.+)~{2}/g, "<del>$1</del>"],

        // Code block
        [/`{3}(.+)`{3}/gm, "<pre><code>$1</code></pre>"],

        // Inline code
        [/`(.+)`/g, "<code>$1</code>"],

        // Image
        [/!\[(.+)]\((.+)\)/g, "<img src='$2' alt='$1'>"],

        // Link
        [/\[(.+)]\((.+)\)/g, "<a href='$2'>$1</a>"],

        // Bullet point
        [/\*\s(.+)/g, "<ul><li>$1</li></ul>"],

        // Numbered list
        [/\d+\.\s(.+)/g, "<ul><li>$1</li></ul>"],
    ];

    /**
     * Parse markdown into html
     * @param {string} text the markdown to be parsed
     * @returns {string} the parsed html
     */
    function parse (text) {
        RULES.forEach(function ([rule, replacement]) {
            text = text.replace(rule, replacement);
        });
        return text;
    }

    module.exports = exports = { parse };

})();
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

        // Sanitization

        // Script detection
        [
            /<script(.*)>(.*)<\/script>/g,
            "<div>WARNING: Script detected and removed</div>"
        ],

        // iframe detection
        [
            /<iframe(.*)>(.*)<\/iframe>/g,
            "<div>WARNING: Iframe detected and removed</div>"
        ],

        // object detection
        [
            /<object(.*)>(.*)<\/object>/g,
            "<div>WARNING: Object detected and removed</div>"
        ],

        // embed detection
        [
            /<embed(.*)>/g,
            "<div>WARNING: Embed detected and removed</div>"
        ],

        // link detection
        [
            /<link(.*)>/g,
            "<div>WARNING: Link detected and removed</div>"
        ],

        // style detection
        [
            /<style(.*)>(.*)<\/style>/g,
            "<div>WARNING: Style detected and removed</div>"
        ],

        // img detection
        [
            /<img(.*)>/g,
            "<div>WARNING: Image detected and removed</div>"
        ],

        // svg detection
        [
            /<svg(.*)>(.*)<\/svg>/g,
            "<div>WARNING: SVG detected and removed</div>"
        ],

        // form detection
        [
            /<form(.*)>(.*)<\/form>/g,
            "<div>WARNING: Form detected and removed</div>"
        ],

        // input detection
        [
            /<input(.*)>/g,
            "<div>WARNING: Input detected and removed</div>"
        ],

        // button detection
        [
            /<button(.*)>(.*)<\/button>/g,
            "<div>WARNING: Button detected and removed</div>"
        ],

        // select detection
        [
            /<select(.*)>(.*)<\/select>/g,
            "<div>WARNING: Select detected and removed</div>"
        ],

        // textarea detection
        [
            /<textarea(.*)>(.*)<\/textarea>/g,
            "<div>WARNING: Textarea detected and removed</div>"
        ],

        // meta detection
        [
            /<meta(.*)>/g,
            "<div>WARNING: Meta detected and removed</div>"
        ],

        // title detection
        [
            /<title(.*)>(.*)<\/title>/g,
            "<div>WARNING: Title detected and removed</div>"
        ],

        // head detection
        [
            /<head(.*)>(.*)<\/head>/g,
            "<div>WARNING: Head detected and removed</div>"
        ],

        // body detection
        [
            /<body(.*)>(.*)<\/body>/g,
            "<div>WARNING: Body detected and removed</div>"
        ],

        // html detection
        [
            /<html(.*)>(.*)<\/html>/g,
            "<div>WARNING: HTML detected and removed</div>"
        ],

        // DOCTYPE detection
        [
            /<!DOCTYPE(.*)>/g,
            "<div>WARNING: DOCTYPE detected and removed</div>"
        ],

        // audio detection
        [
            /<audio(.*)>(.*)<\/audio>/g,
            "<div>WARNING: Audio detected and removed</div>"
        ],

        // video detection
        [
            /<video(.*)>(.*)<\/video>/g,
            "<div>WARNING: Video detected and removed</div>"
        ],

        // Markdown

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
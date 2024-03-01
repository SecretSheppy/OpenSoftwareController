# Open Software Controller

Open Software Controller is essentially a launcher that can be used to make
downloading, installing and managing open source software much easier, 
particularly for those who are not familiar with building software from source.

## A note on module syntax

When browsing the project source code, you'll likely notice that all modules 
are wrapped in immediately invoked function expressions (IIFE). This is fairly 
unusual for node.js modules, however this project uses nw.js with the 
`--mixed-context` chromium flag (which is required for storing DOM manipulation
methods in modules). The IIFEs provide some context isolation, which is useful
for preventing variable name collisions and cluttering the global scope.

## A note on commit history

This project was originally going to be a simple prototype, but has since
become a full-fledged project. As a result, the commit history before commit
4cc08dd is a bit of a mess. This shouldn't cause any problems as the project
is currently far from complete, but for those wanting to see how it developed
over time, it may cause some confusion. Going forward, conventional commits will
be used.
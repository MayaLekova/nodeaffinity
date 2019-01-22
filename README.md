# Sets / Gets the CPU Affinity for Node process

## Usage
This package cannot be used for OSX. It is tested for Windows and Linux.

```npm install nodeaffinity ```

```javascript
const nc = require('nodeaffinity');

// Returns the cpus/cores (affinity mask) on which current node process is allowed to run
// Failure returns -1
nc.getAffinity();

// Returns the affinity mask of a process with id `pid`
nc.getAffinity(pid);

// Sets process CPU affinity, here 3 means 011 i.e. process will be allowed to run on cpu0 and cpu1
// returns same mask id success , if failure retuen -1.
nc.setAffinity(3);

// Sets CPU affinity of a process with id `pid`
nc.setAffinity(3, pid);
```
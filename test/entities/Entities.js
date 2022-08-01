const simplePaste = {
    code: 'Hello from WebDriver',
    expiration: '10 Minutes',
    name: 'helloweb'
}

const complexPaste = {
    code: 
    `git config --global user.name  "New Sheriff in Town"
    git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
    git push origin master --force`,
    syntax: 'Bash',
    expiration: '10 Minutes',
    name: 'how to gain dominance among developers'
}

const instanceParameters = {
    number: 4,
    os: 'Free',
    vmClass: 'Regular',
    instanceType: 'n1-standard-8',
    gpuType: 'NVIDIA Tesla V100',
    gpuNumber: 1,
    region: 'Frankfurt',
    localSSD: '2x375',
    commitmentTerm: '1 Year'
}


module.exports = {simplePaste, complexPaste, instanceParameters}

function sheepCount(inp) {
    if (inp == 0) {
        console.log(`All sheep jumped over the fence`);
    } else {
        console.log(`${inp}: Another sheep jumps over the fence`);
        return sheepCount(inp - 1);
    }
}

sheepCount(3);

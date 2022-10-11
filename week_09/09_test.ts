const to_int_ = (n: NaturalNumber): number => {
    if (n._tag === "Z") return 0;
    return 1 + to_int(n.n)
}

console.log(to_int_(two));
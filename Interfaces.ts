interface Onegamble {
    readonly _id:number
    name: string
    age: Number
    married?: boolean
    setTrail(): string
    getCouponforid(couponnumber: number): string
}

 interface Onegamble {
        Identification?: number
    }

interface coco extends Onegamble{
    job: 'Carpenter' | 'Woodworker' | 'Fisherman'
}

let jemane: Onegamble = {_id:1, name:"Shadaraki", age:21, married: false,
    setTrail: () => {
        return 'Trail set'
    },
    getCouponforid:(couponnumber:40) => {
        return 'Made To The Top You Feel Me'
    }
}
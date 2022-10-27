You returned the array of objects below. 
The output is very long because the CID is represented as an Object internally, 
but if you scroll down we'll offer you a more condensed view.

```
[
  {
    "path": "QmQXV5LXHgnn7kEB1ZS1TjMr4xDTjd1ijQmYqobGiT27Lk",
    "cid": {
      "codec": "dag-pb",
      "version": 0,
      "hash": {
        "0": 18,
        "1": 32,
        "2": 32,
        "3": 125,
        "4": 222,
        "5": 158,
        "6": 159,
        "7": 235,
        "8": 160,
        "9": 85,
        "10": 135,
        "11": 104,
        "12": 34,
        "13": 140,
        "14": 216,
        "15": 186,
        "16": 86,
        "17": 105,
        "18": 105,
        "19": 172,
        "20": 165,
        "21": 185,
        "22": 254,
        "23": 63,
        "24": 216,
        "25": 133,
        "26": 198,
        "27": 139,
        "28": 83,
        "29": 183,
        "30": 200,
        "31": 53,
        "32": 212,
        "33": 121
      }
    },
    "size": 6272584,
    "mode": 420
  }
]
```
To simplify the output, we can use the toString() method on the cid property to get the CID in string format: QmUNLLsPACCz1vLxQVkXqqLX5R1X345qqfHbsf67hvA3Nn.

You returned the array of objects below. 
Notice in particular the cid value, since we'll need it to access this file again later. 
The path matches the cid for this file, but we'll see in the future that that's not always true.

```
[
  {
    "path": "QmQXV5LXHgnn7kEB1ZS1TjMr4xDTjd1ijQmYqobGiT27Lk",
    "cid": "CID('QmQXV5LXHgnn7kEB1ZS1TjMr4xDTjd1ijQmYqobGiT27Lk')",
    "size": 6272584,
    "mode": 420
  }
]
```

// https://adventofcode.com/2022/day/3

// FIRST PART

function priorities(input){
    let rucksacksArr = input.split('\n');
    let sumOfPriorities = 0;
    let alphabetIndex = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    // console.log(rucksacksArr)
    rucksacksArr.forEach( x => {
        let twoSacks = sackDivider(x);
        let firstPart = twoSacks[0];
        let uniqueFirstPart = firstPart.split("").filter(onlyUnique)
        let secondPart = twoSacks[1];
        let uniqueSecondPart = secondPart.split("").filter(onlyUnique)
        
        // console.log(uniqueFirstPart, uniqueSecondPart)

        uniqueFirstPart.forEach( item => {
            if (uniqueSecondPart.includes(item)) {
                sumOfPriorities += alphabetIndex.indexOf(item) + 1;
                // console.log(alphabetIndex.indexOf("s"), alphabetIndex.indexOf("j"))
            }
        });
        // console.log(twoSacks, firstPart, firstPart.length, secondPart, secondPart.length,)
    });
    
    return sumOfPriorities;
}

function sackDivider(rucksack) {
    let half = rucksack.length / 2;
    let firstPart = rucksack.slice(0,half);
    let secondPart = rucksack.slice(half)
    return [firstPart,secondPart];
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}


// SECOND PART



function priorities(input){
    let rucksacksArr = input.split('\n');
    let sumOfPriorities = 0;
    let alphabetIndex = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;
   
    // let groupedSacks = [];

    rucksacksArr.forEach( x => {
        let twoSacks = sackDivider(x);
        let firstPart = twoSacks[0];
        let uniqueFirstPart = firstPart.split("").filter(onlyUnique)
        let secondPart = twoSacks[1];
        let uniqueSecondPart = secondPart.split("").filter(onlyUnique)
        
        uniqueFirstPart.forEach( item => {
            if (uniqueSecondPart.includes(item)) {
                sumOfPriorities += alphabetIndex.indexOf(item) + 1;

            }
        });

    });
    return sumOfPriorities;
}

function sackDivider(rucksack) {
    let half = rucksack.length / 2;
    let firstPart = rucksack.slice(0,half);
    let secondPart = rucksack.slice(half)
    return [firstPart,secondPart];
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function grouper(arr) {
    let output = [];
    let threes = [];

    console.log(arr.length, arr)

    for (let i = 0; i < arr.length; i++) {
        let sack = arr[i];
        
        if (threes.length < 3) {
            threes.push(sack);
            console.log(threes)
        } else {
            output.push(threes);
            threes = [];
            threes.push(sack)
        }
    }

    console.log(output)
    
}

let rucksacks = `WwcsbsWwspmFTGVV
RHtMDHdSMnDBGMSDvnvDjtmpTpjTFggpmjmTFggTjmpP
vtCSGRMBDzHddvBHBzRhrlcZhlLzWNlqblhzcr
shhszHNHHZWqSzVNdClMjlFjBBbNTB
tQQGmnrMnJnGfmvrRRPCjlbljFBdjFCjTjnP
mRwtfGrMmJtwRDvQJQrJpMLSzVDHzhzHZqZzqSzcWVWH
WsWWgrtgsrhTQtsFcWPcRMCCTvqvMvqNNqMMHlMq
bBJrBGbzzLJznJrbSDGGJLqmlvqMqvlmLHRqRZZRNZ
bzJfDGVSzVrJGwjVGPPpQthdPsPpjdphsc`

console.log(grouper(rucksacks.split("\n")))

// console.log(rucksacks.split('\n'))

// console.log(priorities(rucksacks))




// let rucksacks = `WwcsbsWwspmFTGVV
// RHtMDHdSMnDBGMSDvnvDjtmpTpjTFggpmjmTFggTjmpP
// vtCSGRMBDzHddvBHBzRhrlcZhlLzWNlqblhzcr
// shhszHNHHZWqSzVNdClMjlFjBBbNTB
// tQQGmnrMnJnGfmvrRRPCjlbljFBdjFCjTjnP
// mRwtfGrMmJtwRDvQJQrJpMLSzVDHzhzHZqZzqSzcWVWH
// WsWWgrtgsrhTQtsFcWPcRMCCTvqvMvqNNqMMHlMq
// bBJrBGbzzLJznJrbSDGGJLqmlvqMqvlmLHRqRZZRNZ
// bzJfDGVSzVrJGwjVGPPpQthdPsPpjdphsc
// pJpCCBSWlczWWBWMHdMmMsFmpddrgF
// wfVqZZGVQvzsMqmMgHjm
// vDZGvPttQTVtGDQDDDGwbSCcSJSCJWTcRRSRczRJ
// HLVHsVWLwbWswbpWFWrrmThfTPNnhNSDDNhDfznTnhnS
// pBRcvGvvBtpGcqqQvgcphPfzfDGhzdzPDzDDhnhS
// ZQRvqBptjJgZCtJqqMMMLHWwMWZWHHFFHm
// PvPFPvLLLSvNFvQNWNPvrPLrZjwhMttTwtTtQZBwqjqtZqwM
// HJDDbHjgppzCDCmzpgzsGbCsTMZqZllqhJBhMTtVBBhMtMth
// zgGncmGGzHCnHDpDgDCGsmFLLPFjPRRWLRjdcjrcdRLd
// zHnWzntnBRWTSBzRBddpFvZVcHpLFvjvLppvHP
// MmmWmNGQhbCpZVLLbccvpj
// QDMCGrNWfwNznBJsJzDBdg
// tcRcZccZmdZJctRcjrlhNNDfrdNdSfNsNT
// QHQpBVvMpRMwgBgvnHRFlhrSsgNFThgTFFflNS
// vvHpVBBBGBppHvpLvHGbjmmtCqWLJJZRzZZZZb
// ZBtTDZRWsTsDZVWVZDmjpbLbpSSzmLpWrbrS
// MFNNFvvwFHwlhmNrCStLNtjzrb
// vwffwcHwflGqGflHJfDBBZtQVBgZQJtBBsnT
// pTJcmMJTspmpMZZJJZHCQQMzPBlQdWWWFzWP
// LDnwrdnDnqjfqgvfDjrfFlBBPFHFSHPQCBvQSSWB
// nLbjgLjdbrwVRcppsscJVRRR
// mHnfggmMtpHPPBCs
// PJjlQQRrJhJNPPTtBsCbCCTlpptd
// rSSDhNQwShRRjhmMPmzMDfPmfLzL
// HzLFBgrCthtFrrhFSCCCvBQNRVmJJJmnpnddmppddVtJ
// MPZsjDWPjZsVzNTzpVdRdZ
// qMfjWfwclsPsjwzqHgLFhwGFwHrFFrSC
// llllmSbhNmSbNzlPmRNCcgLLchHHpTGsCTQGpT
// dVjBrvBBVLJQsLpC
// frZBWBDMFndStFsSwzlPlq
// vmTVVtmJHwCwDllttTsrcPcMrfqPMMpjMq
// LQGBRgGGRNgGgBhgzHfpjPqsMjpLcLjrPLpq
// BdgzgSRGBnNHJtJlVStVmt
// FbDQsFjPVHFZFSbrVjSVvMJlGBJhDcqBBllJGccJnh
// RfTCTTpmppfgwCpwpLwRMnMGMlcPGqhddPcJnl
// zgLPLNCCpLggzmTzTWmVrjVvrNvjjjvbVHQZZH
// RBjjpwmRszBdvhLdSvpVpV
// GrbfbJWmQJGWrGZZQMbSLggfCgSHhCSgShghSC
// DWNDZQcrbWQrZJZGQQZPsztzBsPmBTzwcwRwjT
// rlvgglvZqbrbWbWWdvdmPHBBNMNJGqjGRRnHnPBJ
// cDFDcfcCDhLzsCfLDVpGPRJMPsRJMPNRnjHHGJ
// DCfMVDFVScVMVQlgmZgdmWQQmS
// nWTWWgwNgGDdBZBVcvDzzJccVlCzHD
// RLppMMLpRqfMtMjtMCHJFSpzHSvSpczJdl
// RdLRbQRjsRMrMRRMfbQLqPjbmnQgQWWwZmggnNTgnnWwhBhn
// TmzjMjrmjmjBmHLvGPpbvWGqJzJJ
// CfScwNDssDVCccdNVcNDQfbqJLqSLPpJpJJvJPpGTWJb
// nddCQTfQVVrHmjMnrMFM
// WHDnTwvwcwZmWwQTnBtgbVLLbgfSlTfrfb
// CPPGdJRzNhNpzPJtMgBLbgtlLLfLMz
// GJptpdFRhJwDmFHDjvnD
// PNcWDNnNDcLjDDcSRWtQFfzzzQgPgsssZtPZ
// MGhJRJGGrlpVGVHVCqqGqBQvzFzFfBvZvvtZtvFzvZvQ
// JmJplCrlMNdmjbNbWR
// pqpqFJPPSswJshNghg
// zTHHrrbLzDQHccfhqmDshgCwfmqm
// rtqqtTTHtzGLPWBdnGBSWGSS
// gmNvgVqjjqzfMRgrRtPcft
// WswSQwWWHGCsHQhlGGLLJRbLMRfRGcMb
// dQCRCWhhwCwFwQshhRTmmBmFjFTTVNpqTnTj
// FZvqSWqjjZvvrNSvbblcbslDppDHbcsS
// MmwLTwPmBwmLJJmLlWzWnDllHcHzcDHM
// QRwtQtLTwwQBTPfFfZdFvqqrFGWjrh
// MqlnnNvJJZnNNdJZZLvLJnMzjjCTCChgWjccWqcjhcgcWR
// tbddSHDBbHgHhHTCjh
// mffBfbpsFSdQQDbQsrlJvwJNLLJMrrlsJr
// RjqbNRRbDDqHndbcHDqdRHcChsffCQJJssZGpzpCpJphJd
// VrMmSbrWVMtMtLmQGCfZWJZCfpZfJW
// PgSPgTvSSHjjBbvbvq
// whclNQQfcCFCcrJRjmmHNWsmLs
// PPzMbqBPLVtnTppPTPzHJrGWJRRvsjjjRHssRb
// PtgPVZTtTLMtBzqPqttPVMClcdDcgCCfCQDSdSgCwlhh
// DrcrsvcNtLWSFPSFszbM
// HqTdHJdQhGJBHQHWWDTnnPzbMMzPnS
// hdwfqdhQJfjlccrfvNDLfl
// BBPCWvjvTLrHTHHPCTndfwhbdnnZZfDhJwfJVb
// msmgNMMcgmgczlmmgQNlddpVDDZpZpDfhZfJwsJF
// mmQmMgSgzmqSRllGmgjPHrvvwHttjLrLRWWB
// RwvDvhjhMvwlFNwNwCWCCWWLZcbGGZLGJVrppbZVcjmpmJ
// tfnfsStnPPfTfgnPSSzPflJZZZrlZJVzLLmZJrzVmG
// nPHqgfsHQnffqgSTldHTPnPHWMRFFqqFhNNNCwNCFMMhDMhh
// FmwFHmnlGJfnlSlmrfsSvWgZNWNvLvtqLqDJhWJD
// BVVTTMqRWvRZRbhW
// pMBPCzVPQcQsGqSFmPFwSF
// TcpTpwqZqMpZqlZCpZlwDjjcPNdgdPjHHHdvhHQgvv
// zQFBRbmsQbLLBnGBvFdPghddNgHjNSSj
// QnszWVzLfsLGbnGQbwpVtMrwZTqpCqpppr
// WrZmrJcGwZdGZZmHdJcwGWcZsdFFLqTtLVtSTLtvvLtLLqSs
// fnpCCQClfpQlzbbpQpflBpjhLVSTvFhjqtstVsjtstFVMs
// QBQRnbCRpnPngnbggCzzRClZwJHFHDwZJPJGWHwmNGHPZr
// fDhjvftQtDwgPhdRcRRP
// bbNSgllVNMCWVnbWmcdFdmmFdpFpRrPPPw
// NBzBglNzBvvGZDJQ
// rGbbtStjSdbGtDpjjJbbRRbdrcCsCCrFqhllrFHsFsCvqCWH
// TzgMMgmTVgzzTMLLfMHvTFsFCqHTvFsTvshF
// gLMPBgQmQmNzVZLPzPppjbRhhddGBGSttbpR
// zMJTpMzpVczHbCzVJVFCpJPngnBqVZqsRZZPnjqRgmjR
// wttwNdfLQwLhwhhDDhWvgRmnPqsQqjnBPSZRgjPS
// DdLwGGvNvhlvrrMFlFTcZrpC
// llBQWMScQlSSBjMrvrrPpFHFBDFDFJTmTtFFmF
// nzZzfVgzCNtnJppDHPnPpp
// LdRNfVdzbzCCjcvllMcsbtjj
// pWFwpFhprTnFfWwZrsBDmsqBvZvjjv
// VbcHCthtzQtNqBsvsZvQmQsj
// cltzzVcJSMtRWdhJLhRwdh
// lmmmLRdZnjBlGgVhNSVvRMWN
// bDwCqCGPbwpPwDPPpCpqpPbScvMSMSDWgVcSShNNVfgWWv
// bTpzqJHPFFJqbTHswLlGlBntGnjQtGBZTT
// pVjVlDDhmRPlHlHPWzWVWrVrcWztVdzv
// GCqGGGJSFbnLJLLfrLfPrLdgrrgfWd
// PbJSQGSsGnbMbqSFGBMMbsGTNwpTRwppDRsjwlNpsmHwDl
// GcnPbbbLqDPDBPPDlQ
// JtTChNfRpNJMTCfMTlJVsdVHvDddHBVmQm
// TzlffWNfjTfjjCjfTtRrLgbnbbnSSwbnLzZZzr
// hggWzjLhzhLhjzVWgpCpTFFHtCJFTJTHHHdG
// lvSBvNNSNSSmlbwmMJCGtJQCHmdT
// cfSlSSlvBDBPnlPPDZLsgtggZZVVfhzRgV
// gGVJGvVVZZLvQLWQppccpctpNptMhnhSjjnM
// fzQBsBzmwPzdQrRbSFNFnsSDchjnFhMN
// bCwQRbbCJvlGCHgL
// NMgdHVSqgQcVHmlllLDjlCLdjL
// whTRJtJTnthWBlLLLmlFtVmV
// wRhnGTpzzTRnVbzzWWbJwbhNQrZHfpNgMQpfZQHHNZZHHQ
// qNNlMdbNrlVsQQfswQNCmW
// LJzBvSdLSHpDJzzzHJnHnzFQCCmmswmfwBGhsQfWfCwW
// HzSvHppDDRvgHzzcnqTrTtllZdRrbRVVZZ
// TWVVVFVPpjVFtRfPBmmzMMPCvmLm
// hDDrwndQQbbhZDMSMvcflMLmfnBL
// grdggqsbrhdJJJrhbwbbsZGHVNHtTWpVBFVTTTVTHtNg
// tLbvnTCzCVnzzwVTJVlwltMFvQFQRFFrQPBFdNgrMBNF
// pShsqqmGjZfZccsqSfbdNBMMRQGBPgMdPMPF
// HhspDpjhSjbcSmcqhZDcZZjTttLVwlTJJVWtnWVlWHCltL
// DwQBvwBnBrSVRrZM
// JWWGRssgRsFgzsFPJrNHVMHrlVrPSMNjHH
// gspgFzRCFWLJpgqqRWgqpCJwnQCnhQvwcTdcdddnwbDfhf
// fMMCwFDGNNMTdTDLlVlZZmdZBdBtVr
// jjpjtbpRcPvSPnPnpPnvPPPnbZlmrWmLWHmHBWHlrmrmlZWl
// jqjjnPqngtQfGFftFq
// qnzhhbzzqGgsqGtnwcJrlCMlCjvcCCcrCRrvCv
// mVSNZdTQdVVWmVFHQrpCjpjDRvjMRjdLRt
// WBHZTHHTFWWNNBNHQTZPsPggghfgsnsgsffthszJ
// sDwpdMgvHrZgwbdggzZZgPhFNFFcjPPqhLhjMlPqLq
// JffJfnJGtBtCQQRBJZTQJJGfcNjqCLcFhFWCPLjhFLPjcPhl
// VZZVmtGQQZmHrwgddppb
// NNNlpjbVpGglNbvpTwBQQvfWvfBrWvBW
// JthDJsLhhHPcGcqPshJsshSBwCWwfWSLCfSfSSRBrfWB
// dhDtZqGmctZDtZHqDGVgVgNbbbFjndMFNlFg
// jqDVzzDMdDwsVQLCZVCRWLGBQC
// bbHFbSSpFbFHJHStJNbtJprZlCGLQsLGZRBLRQLQpLBClZ
// SmFmTPJvFTNbmmsMdqqjscwz
// RqMbHGJRJpgJgGgQjgrLTrTzjcrTrrLg
// lwfwdhnflPlbCsVVjhCSbV
// fwnNtwmlFZpbFZtM
// QNSQrLTNrLNQRRrfHFrSjqhblWtSltqlWqtWWl
// DvgBgnzgcvVZMljv
// DGJdjBPDngDnDjBpBmFpTRmRFLRRmmCmHH
// dtgSdTqdlvdJJvFqTvSqJqqRMPBtLHPBnWbsbWbsbWtWtWHV
// DjfCfmcpNrwZQCmmNrDZNZNpsHLHWBBbHVVcGGGbHGBbMVMB
// fpNjCfzLNZjTllvzdSgFgJ
// nHBfZmHTRwsZffjBnHfmRZHtLtdNPPlWvddWLWJlJldCldLC
// zwrbphMMVFzMwdCWNPlCbPdDCD
// hccMSpqShMSrhZTBwmTqHjqZmf
// NJGGLwGsTSsNlJZhmtgCVlbWQWlQMtCbvb
// pDjppDBRdjzqpHqDSDzjVMCCrCrWtgQWdtdQQCdb
// fHpfRBPRzDpBFSqcSBRBSNhPNwwNNswJLhmmLNGJZL
// RZbsPgnVDzTJcdGjDGmD
// NwfQHQtpfppQhjVVjqVNJJTN
// tLLtwSptVCSWpvVtRnrbWbMgFPMsgZss
// VsQjSwwVSwsZzsvdscZvfrhPRpqBrBrbpzMrrTMh
// JtNDTmtGJTmLCGFDCHtDhMMBRhqqRbPrfrbNRrbR
// GDWLlDnFgZdTSTWv
// gfQHRRpQgRqNSBtjqwjztzjtnL
// FvsPgvDlFcmvmTLlBMVztnLwWLzL
// cvZGDcvbPcmbTbrcDDPgvbTJdJfJHRhZSRSpRRfHdSpSZd
// FGHHHWvBWrHHrWVZJvVtcSrtrTcrtcjMTjStSM
// swpwfRhRmmmRQDzcJlcqMSMMqtbMTz
// dQDRDDRQfmmQDNsLfwRJvZJWFWVnPWvvPddBnC
// zVhHvhMVTnMJgcTzMcfGJtfBWRtBRqJWtqJb
// hlZjZSQCZtfBbGjqbb
// SQDNwplrDVnhDcVHgT
// HHZmttZVLVMQQJwMfcDRfDbbMN
// phWvTgBqqgBWsTPTzhWzhzfNGNNwfqfcDwJRRbNcJcbl
// FnTsvnhppTPFTBpPzPvpBBpFVmtfCjfmjtCmFdStLmtdfjSd
// hMTPPMNlLZNSGNbRBB
// gjmrsrttsCnsCsttVsjvttvtZGFHdbZGWWWdZSWddBHHnSWH
// BmvptjsrfjBgsvvfgmfQchMpMqqhcQPMMPMhLQ
// dJHGnrJJpGpDpFzzDmfsfSSCbfTfMbbRDb
// vLcwtWNgtVtSNWmTmTMCmhNhTRfM
// jqVgqVvWwwLwwgqZgjVSrPGzHHHqFnrHnFGHJGdr
// QcQcdgbzwJnzfgVnVwdHQbdBrrpplHvmhLjrlTphppLrjl
// MsPssfSZMWGWqWssSNPqrmmLBvjhqTvhjBprhB
// GRDDZMFNMGFCSNWFPDMMFWNnwVtdVdQfcgtddwQwzRJfQd
// pMqCMBGpMMCnwnpBMGBlbVRFJFWsJzRdzHlWzzJdJsJd
// jLLZjDgPbNPZTDbvftvZgzRFsRzRrRRHWFsJsFJc
// TZZLDPjtmDmbqQGwQnVM
// RjnNhBnnNNmJmBNhrqGpsHbHtstgTtTjqb
// WVMfWwQTzWZDMtlsfldqpplstf
// WVTWSTzwQWSSvQVZCQPTSZPvBcnmcvnrhmNcRFncNLRLJmnB
// lffQcnNTQBBcwqsdcqjSspcWtD
// MPMGrHGMMTqWTtDg
// VGRGLrJHZzLHPzTNTmmBfZQFTNBQ
// lQBPPrBrlnqBgSRhgZZZrLJr
// VNcWMDZbJHhWfWff
// VwvMwMvdwvdwjcwdwDDqsqsZQqPPzqzldPQtps
// VVJcZJVrRSdcsddfsvvbvFZBnngBMzMZFD
// hLLqLpqqWWphWjhlGlCHDFgzbvFBbgBFtnQpnngg
// HlhlmmHBTqTHHmlLqjTGhHhPdwdmsdcSNSfNJRrRcfwVJdrr
// HmhvmRzzHHrRMBJBjNJGDJRnJD
// cbqcPqLWZwsgQWZwWPwWgPPbntJnrNftNNNBtNJJNDBNqdjB
// lgwWgggQcWSzrlTHMHlp
// FZhQpClCWLBlrNDZvrwrrNSH
// ztTfjMjJjgsGrqvzDGwG
// bMjfnjndjnJtfgMTwPjFhQhCLdQCFWQQLWQhch
// PtrqPrrMCPChzCtLFRbtNgbdTjbF
// GdZGvJSWWDGplFjbjLjLSTlL
// vspvnZsVppBdBnBpDCszhzMsMzzPzPhcPC
// PdCtdfCMfGmtfmtBSWrMQwSlwWwJNQ
// qTqbcjqHTZTbcDqczTjjZvWrQvVWJQSVQZZSVVrJNr
// qbqjRFTcHTcDFgcczRqFrPsGGGgnhtGssCdnffGmsP
// vVbcMvqjjjmHCBCBBmBSSH
// PzzLTrcrwQgfLGrJBHSGFSCHtRFBJt
// cfsPrLDwQNgsrTNTQgLwVpWnVWvMNvqjjqvpMvlj
// jbqZNjLbZQvcfhhQ
// CWdCDWWMCgmJDnJmdQVzMSchvfcQVFShzf
// WPgWGRWRHdPBsttrHvNtrl
// MCJCCMCqcCqJsnssjQRlTvQQQQqTvqfQ
// HGVmwmLVlZRzcGZG
// FcchHmDFpFbDMDMbntsJ
// vfNvvttvDRcrvRNRNTLDNRcVsFhwVBVTwbbFFVbVhbJMBB
// CJGgSJHdgPPSnQnjnddHGGFMSMwMMsmsFMMFhFShMWMM
// dGCdjgzHCPPGlHDDqJtqRcqJlpfR
// CwtqqvwLwnwhtRLtdRnwnnRhPHpLLppTPPpTVfTHzJWVLTWB
// sGDsZDllDrMFZVmGgsmDMlmHpJBHpcJFPPTHfJJPzfTHWz
// srgVlGSgZVGGrRvwQwdqwtCvnS
// MLPgDrgLzThhCTgg
// GVfCbvVbVvhBHlmhvhHv
// ZqRQffRwtNZWVZfZSMsSssncnDCDnL
// VwBNhNNmhJswqjJsRzPgDvSgJvtgvgDt
// rRMblbHFfRrSWvPPPgMzLW
// ZFpFpCcprGfbrGfGCHclZfnGqmsjmBdNVjQqRBnqBsVNQwBh
// VLQlZWQbcPgcPmWbgmDWLQzdpGMTTqdpMTNsbGsNpMSqdq
// HChrwfffhJtfHwJTsDqThhDMpTGsjj
// HvffCrtBzclQZvQD
// dCBVJJmrJDlBdQJWZTTsWbdWThWpbM
// FHjSPjwqwssSgqTMGbGWhTMHMMZG
// FwLvLfLjjSPqFqgzwffFSvrlDJvrQrDVrnmBvrJsQm
// hZCRbddrgrRSVgcGZjjLFGLZFQFp
// nzPvMsPvtmvPNssPMqpcWVjGGcGLlqGcGN
// TBzmTmzmVmrBSBRrRgdR
// bwZZmwfFmcfCRswNWNBsjC
// VDSdglSStRCCTNCD
// VVVppGHGlrQnnGJbMmnmCh
// nFhgnFVNtgtFVssgdgVtVtsqJPTNJvDSNqTZZzbzTDDzDq
// HqLHqcwlBjLzPvPJCCvJ
// HGrlHqlllHBppRrlwWFnnWfFFVhMnnWdFhfn
// FsMFVszjggMMzWlPJlPPlLQsJv
// nqnBSNlfZqSvLHnHvWLQTW
// hShpfCCSRtfjgFjMzdjlpr
// jsbDsQnnwPsFbZgSltWGdgJgpnSp
// SCVvLhLRrzCNBhrCvddMJpWdWGvJGlgtpv
// cHLBBVCcCNHrbcSQFwQTbDws
// rMlbLgrRgpwTDbflcnHtSScwHdJdwHJB
// CQCjjZPzGGzCzZQvBVBNdQNSJVcJ
// jsPhCzhPqFZzZzChFlsbRRLrMfTbbcLTpD
// dqjzmmmQBjBHCmWrgVGWrrrvrpgVpM
// PLJnTFbJnhTDzrGgMlvrFMzF
// SssPcDttntDSsLcCzHBmmwcmZQqH
// fFfFSPHllPRpRfnmmFfHvHjgbsBQjsptBdBTTddjsDdt
// ZqLJCLCZzzTgWjdzDjzb
// ZhNLMrNcGrchLqcCVMqRvlSnFnRnmmGRggnPnP
// HMCMCMrHfwMHtFwTtgHHbVjjbsRZDwDVRbZqjhBD
// cDpmpdpNLNDcdZjZqZBNBqssRR
// SLJSdPcznSvdvDcHFCftFTFWCTHnWt
// NlMmlPClmdGldRZHJs
// tgJJcJQcntHBsnBt
// TfSgQhhccczSVQqrgSgTjFWqLWmwLFNJLWWPPwqM
// GGwTHqWVdnTTVVqgngzzqHzGFbJspFccRsjDpDcjsRFDsdjR
// rtLflllZSrhQPLBtQStZvhjDNjbcDNDRNFjCsCDCFs
// mPLBQPtvtQZtBlLSmMqVGwHbVMqTHWmz
// VvJCrqTvPvQrCpRNVRFGfZfmfG
// HMzsdWsjhZSsJJZNZf
// wHlbjnlzWCvqJBQlrD
// FnVRRsVdSnSnFSRqTVdqBBDBhrDdmcddMcMQMhzm
// HtZvJwHlgjlGlHJLNjJrMmrcmDQfDLczDrMhhh
// vGGpJjttvlZljZllZvJZvwGqsSTRWSCpnCWTVPVmWWTWWn
// wSHCNwwmcSMLSDFcwwSSHQvZnQjLZffZjZZbVZjVVb
// JqsNJJGGqprJNtpWhGhspfnffTnTvZvVbZnTrfBQvV
// GsWhdGtPWpghJRqhtNPmClczSlDglHMlczmwCH
// TzRpjVRjFpVLTTdgrTgrGsZwrZZwgg
// vQfSBdbDbMbQNBJrlhmGnrgrgwZhvm
// SHSCbdbddcVWqqFPCLqR`

// console.log(priorities(rucksacks))
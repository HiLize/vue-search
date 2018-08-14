import {get} from '@/http'

// 获取分类列表
export const getCate = params => {
    return get(`/cate/list?tenantId=${params}`)
}

// 获取分类问题列表
export const getQuestList = params => {
    let url = 'list?tenantId=wisedu'
    if (typeof params !== 'undefined') {
        if (typeof params.question !== 'undefined' && params.question !== null) {
            url += `&question=${params.question}`
        }
        if (typeof params.cate !== 'undefined' && params.cate !== null) {
            url += `&cate=${params.cate}`
        }
    }
    return get(url)
}

// 获取具体问题详情
export const getQuestInfo = params => {
    return get(`get?id=${params}`)
} 

// 常见问题分类
// http://172.20.4.138:8871/question/cate/list?tenantId=wisedu

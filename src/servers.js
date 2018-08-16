import {get} from '@/http'
import {GetQueryString} from '@/utils'

let tenantId = GetQueryString('tenantId')
tenantId = tenantId === null ? 'wisedu' : tenantId
// 获取分类列表
export const getCate = () => {
    return get('/cate/list?tenantId=' + tenantId)
}

// 获取分类问题列表
export const getQuestList = params => {
    let url = 'list?tenantId=' + tenantId
    if (typeof params !== 'undefined') {
        if (typeof params.question !== 'undefined' && params.question !== null) {
            url += '&question=' + params.question
        }
        if (typeof params.cate !== 'undefined' && params.cate !== null) {
            url += '&cate=' + params.cate
        }
    }
    return get(url)
}

// 获取具体问题详情
export const getQuestInfo = params => {
    return get('get?tenantId=' + tenantId + '&id=' + params.id)
} 


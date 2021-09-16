import {request2} from '../network/request.js'

// 书籍内容
export function getBookTextData(bookId,dirId){

	return request2({
		url:`/book/${bookId}/${dirId}.html/`,
	
	})
}

// 书籍目录
export function getBookDirectoryData(bookId){
	return request2({
			url:`/book/${bookId}/`,
	})
}
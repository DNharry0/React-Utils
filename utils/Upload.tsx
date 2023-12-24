import axios from 'axios';
import { useMutation } from 'react-query';

// 파일을 업로드하는 함수
async function uploadFile(file: File): Promise<any> {
    const formData = new FormData();
    formData.append('file', file);

    // 엔드포인트 수정.
    const response = await axios.post('/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    return response.data;
}

// 파일 업로드를 위한 커스텀 훅
export function useUploadFile() {
    return useMutation(uploadFile);
}

// 사용 예시
// import React from 'react';
// import { useUploadFile } from './utils/Upload';

// const MyComponent = () => {
//     const uploadMutation = useUploadFile();

//     const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const file = event.target.files?.[0];
//         if (file) {
//             uploadMutation.mutate(file);
//         }
//     };

//     return (
//         <div>
//             <input type="file" onChange={handleFileChange} />
//             {uploadMutation.isLoading && <p>업로드 중...</p>}
//             {uploadMutation.isError && <p>에러 발생: {uploadMutation.error}</p>}
//             {uploadMutation.isSuccess && <p>업로드 성공!</p>}
//         </div>
//     );
// };

// export default MyComponent;
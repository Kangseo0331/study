#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <dirent.h>

int main(void)
{
    FILE *rfp;
    FILE *wfp;
    DIR *dir;
    struct dirent *entry;

    int file_count=0;           //파일 개수 저장
    char file_list[100][256];   //파일명(문자열) 100개까지 저장가능한 배열 선언
    

    dir = opendir(".");
    if (dir == NULL) return 1;
    wfp = fopen("new_text.txt", "w"); 

    while ((entry = readdir(dir)) != NULL){
        if (strcmp(entry->d_name, ".") == 0 || strcmp(entry->d_name, "..") == 0) continue;
        if (strcmp(entry->d_name, "new_text.txt") == 0) continue;
        
        int len = strlen(entry->d_name);
        if (len < 4 || strcmp(&entry->d_name[len - 4], ".txt") != 0) continue;

        strcpy(file_list[file_count], entry->d_name);
        file_count++;
    }
    closedir(dir);


    for (int i = 0; i < file_count; i++) {
        rfp = fopen(file_list[i], "r"); // 정렬된 배열에서 순서대로 꺼내서 열기
        if (rfp != NULL) {
            char str[300] = {0};
            while (fgets(str, sizeof(str), rfp) != NULL) {
                fputs(str, wfp);
            }
            fclose(rfp);
        }
    }
    fclose(wfp);

    printf("\n정렬 병합 성공!\n");
    return 0;

}


#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <dirent.h>

int compare(const void *a, const void *b){
    return strcmp((char *)a, (char *)b);
}

int main(void)
{
    FILE *rfp;
    FILE *wfp;
    DIR *dir;
    struct dirent *entry;
    
    char file_list[100][256];
    int file_count = 0;

    dir = opendir(".");
    if (dir == NULL) return 1;

    while ((entry = readdir(dir)) != NULL){
        if (strcmp(entry->d_name, ".") == 0 || strcmp(entry->d_name, "..") == 0) continue;
        if (strcmp(entry->d_name, "new_text.txt") == 0) continue;
        
        int len = strlen(entry->d_name);
        if (len < 4 || strcmp(&entry->d_name[len - 4], ".txt") != 0) continue;
        strcpy(file_list[file_count], entry->d_name);
        file_count++;
    }
    closedir(dir);

    qsort(file_list, file_count, sizeof(file_list[0]), compare);
    wfp = fopen("new_text.txt", "w"); // 정렬 확인을 위해 깔끔하게 "w" 모드로 오픈!
    if (wfp == NULL) return 1;

    for (int i = 0; i < file_count; i++) {
        rfp = fopen(file_list[i], "r"); // 정렬된 배열에서 순서대로 꺼내서 열기
        if (rfp != NULL) {
            char str[300] = {0};
            while (fgets(str, sizeof(str), rfp) != NULL) {
                fputs(str, wfp);
            }
            fclose(rfp);
            printf("➡️ [%s] 순서대로 합치는 중!\n", file_list[i]); // 순서 확인용 프린트
        }
    }
    fclose(wfp);

    printf("\n🎯 정렬 병합 성공! text1 -> text2 -> text3 순서로 이쁘게 들어갔습니다! 😎🏆\n");
    return 0;
}
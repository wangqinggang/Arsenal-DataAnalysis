from django.contrib import admin

from wordcloud.models.tag_record import TagRecord, CourseTag
from wordcloud.models.word_cloud_tag import WordCloudTag


@admin.register(WordCloudTag)
class StudentRecordAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'type','description',)
    search_fields = ('title',)
    list_filter = ('title',)


@admin.register(TagRecord)
class StudentRecordAdmin(admin.ModelAdmin):
    list_display = ('id', 'tag', 'student', 'value',)
    search_fields = ('student__id', 'tag__title')
    list_filter = ('tag__title',)

@admin.register(CourseTag)
class StudentRecordAdmin(admin.ModelAdmin):
    list_display = ('id', 'tag', 'course', 'value',)
    search_fields = ('course__id', 'tag__title')
    list_filter = ('course__name',)

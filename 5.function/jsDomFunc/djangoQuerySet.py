# views.py의 일부라고 생각하자
from .models import Blog # 모델에서 Blog class를 import

def home(request):
    blogs = Blog.objects # 모델에서 전달받은 객체목록을 '쿼리셋'이라한다.
    return render(request, 'home.html' ,{'blogs' : blogs})
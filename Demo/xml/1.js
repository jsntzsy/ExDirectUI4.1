//���1.xmlʹ��,GBK����

/*

    ȫ�ֶ���($.)��ط���/���ԣ�
        low(n):����n�ĵ�16λ
        high(n):����n�ĸ�16λ
        dword(a,b):������aΪ��λ,bΪ��λ��ϳɵ�һ��32λ��
        alert(text[,ico]):����ϵͳ��Ϣ��
        debug(...):�������
        i18n(id):������ת��,����ת���������
        flags:����ȫ������
        hInstance:ȫ��ʵ�����
        lastError:��������        
        isDxRender:��ȡ��ǰ�Ƿ�ʹ��D2D����
        toObject(hObjOrDUIOrHWND):�ӿؼ����/���ھ��/Ƥ�������ȡ��Ӧ��JS����
        RGB(R,G,B):��R,G,B��������RGB��ɫֵ
        ARGB(R,G,B[,A]):��R,G,B,A��������ARGB��ɫ
        color(s):��s�������ɫת���ɶ�Ӧ��ARGB��ɫֵ,s�ĸ�ʽ��xml�е���ɫ������д��ʽ
        mFree(p):�ͷ�pָ����ڴ�
        mSize(p):ȡpָ���ڴ��ߴ�
        mValidate(p,s):���pָ���ڴ��s�ֽ��Ƿ���Ч

        //���¹�����Ҫ�������ʼ��ʱָ�� EXGF_JS_MEMORY �ſ�ʹ��
        mRead(p,d[,c]):��pָ��λ�ö���c���ֽڵ�d��(d��һ��JS byte[],��ҪԤ������㹻����,c������Ϊd�Ĵ�С)
        mWrite(p,d[,c]):��dд��c���ֽ���pָ����ڴ�λ��(d��һ��JS byte[],c������Ϊd�Ĵ�С)
        mGet(p,t[,len]):��p����һ��t���Ͷ���(tΪVT_XX��ͷ�ĳ���,����������Ҫ��дlen)
        mSet(p,o[,t]):��o������t����д��pָ����ڴ�(tΪVT_XX����,������д��Ϊ�Զ�ʶ��o������)
        mZero(p,c):��pָ���ڴ��c�ֽ�����
        mFill(p,c,d):��pָ���ڴ��c�ֽ����Ϊd(dΪһ���ֽ�)
        mCopy(d,s,c):��sָ���ڴ���dָ���ڴ濽��c�ֽ�
        mAlloc(c):����c���ֽڵ��ڴ�,ע��ʹ����Ϻ�ʱ��mFree�ͷ�

        //���¹�����Ҫ�������ʼ��ʱָ�� EXGF_JS_FILE �ſ�ʹ��
        fOpen(file[,mode,share]):���ļ�,�����ļ����
        fClose(hFile):�ر��ļ�
        fSeek(hFile):�ƶ���дλ��
        fTell(hFile):ȡ��ǰ��дλ��
        fEof(hFile[,textmode]):�ж��Ƿ����ļ�β
        fRead(hFile,length):�����ֽڼ�,ע�ⷵ��ֵʹ�������Ҫ����mFree�ͷ�
        fWrite(hFile,data):д���ֽڼ�,data ֧��JS byte[]�� �ڴ�ָ��
        fPrint(hFile,text ...):д���ı�(ע���ǿ��ı�)
        fGetS(hFile):�����ı�(���ı�)
        fReadBytes(file):���������ļ�,ע�ⷵ��ֵʹ�������Ҫ����mFree�ͷ�
        fWriteBytes(file,data):д�������ļ�,data ֧��JS byte[]�� �ڴ�ָ��
        fSize(hFileOrFileName):ȡ�ļ��ߴ�(����֧���ļ�������ļ���)
        fDel(file):ɾ���ļ�
        fCopy(src,dst[,notover]):�����ļ�
        fMove(src,dst[,notover]):�ƶ��ļ�

        //���¹�����Ҫ�������ʼ��ʱָ�� EXGF_JS_PROCESS �ſ�ʹ��
        cmd(text[,wait,show]):����,waitΪ�Ƿ�ȴ�ִ����Ϻ󷵻�,showΪ������ʾģʽ
        exec(path[,cmd,opt,show,dir]):ִ��
        run(path[,cmd]):��������
        dLoad(path):����DLL
        dFree(hMod):�ͷ�DLL
        dProc(hMod,func):��ȡDLL����ָ��
        call(func,...):���ú���
        API(dll,func,...):����API


    Ƥ������(DUI.)������ط���/���ԣ�
        validate:�Ƿ���Ч
        center():���е���Ļ
        getObjFromID(id):��ID��ȡ�ؼ�����
        getObjFromName(name):�ӿؼ�����ȡ�ؼ�����
        getObjFromNodeID(nid):��NodeID��ȡ�ؼ�����
        findObj(after,classname,text):���ҿؼ�
        move([left,top,width,height,repaint]):�ƶ�����,��Ӧ������null��Ϊ���ı�
        setPos(hWndAfter,left,top,width,height,dwFlag):���ô���λ��(���忴SetWindowPos)
        show([show]):��ʾ����,showΪ�Ƿ���ʾ,Ĭ��true��ʾ
        close():�رմ���
        send(umsg[,wparam,lparam]):������Ϣ
        post(umsg[,wparam,lparam]):Ͷ����Ϣ
        alert(text[,ico,flags]):����EX��Ϣ��
        getLong(idx):��ȡ����ֵ
        setLong(idx,value):���ò���ֵ
        setBkg([fileOrPtr,repeat,flags,alpha,x,y,pGrids,update]):���ñ���ͼ(ע��pGrids��Ҫ����һ��ָ��)
        setBkg(bIsPlay[,reset,update]):���ñ���ͼ����״̬
        enable:�����Ƿ����
        visible:�����Ƿ�ɼ�
        style:��ȡ���ڷ��
        exstyle:��ȡ������չ���
        duistyle:��ȡ����Ƥ�����
        title:���ڱ���
        left,top,width,height:�����󶥿��
        rect:���ش����󶥿��("��,��,��,��"���ַ���)
        client:���ش��ڿͻ����󶥿��("��,��,��,��"���ַ���)
        hExDui:����Ƥ�����
        hWnd:���ش��ھ��

    �ؼ�������ط���/���ԣ�
        getObjFromID(id):��ID��ȡ�ؼ�����
        getObjFromName(name):�ӿؼ�����ȡ�ؼ�����
        getObjFromNodeID(nid):��NodeID��ȡ�ؼ�����
        findObj(after,classname,text):���ҿؼ�
        getObj(idx):��ȡ�����ؼ�����(��� Ex_ObjGetObj)
        move([left,top,width,height,repaint]):�ƶ�����,��Ӧ������null��Ϊ���ı�
        setPos(hWndAfter,left,top,width,height,dwFlag):���ô���λ��(���忴 Ex_ObjSetPos)
        show([show]):��ʾ����,showΪ�Ƿ���ʾ,Ĭ��true��ʾ
        destroy():���ٿؼ�
        getLong(idx):��ȡ����ֵ
        setLong(idx,value):���ÿؼ�����
        setBkg([fileOrPtr,repeat,flags,alpha,x,y,pGrids,update]):���ñ���ͼ(ע��pGrids��Ҫ����һ��ָ��)
        setBkg(bIsPlay[,reset,update]):���ñ���ͼ����״̬
        setColor(idx,color):���ÿؼ���ɫ(color����ʹ�ı���ʽҲ������ARGB����)
        getColor(idx):��ȡ��ɫ
        setTimer(interval):����ʱ��
        killTimer():�ر�ʱ��
        setFocus():��ȡ����
        killFocus():��ʧ����
        initProps(c):��ʼ�������б�(cΪ���Ը���,-1Ϊ��ϣ��ģʽ,0Ϊ���洢����,����Ϊ���Ը���(ÿ��4�ֽ�))
        Prop(key):��ȡ����
        Prop(key,value):��������(valueΪnull��Ϊ�Ƴ�����)
        send(umsg[,wparam,lparam]):������Ϣ
        post(umsg[,wparam,lparam]):Ͷ����Ϣ
        dispatch(umsg[,wparam,lparam]):�ַ���Ϣ
        event(type,func):���¼�
        fireEvent(type[,wParam,lParam]):�����¼�
        visible:�ؼ��Ƿ�ɼ�
        enable:�ؼ��Ƿ����
        text:�ؼ��ı�
        style:�ؼ����
        exStyle:�ؼ���չ���
        textFormat:�ؼ��ı���ʽ
        hObj:���ؿؼ����
        id:�ؼ�ID
        nodeID:�ؼ�NodeID
        parent:���ظ��ؼ�����
        alpha:�ؼ�͸����
        lParam:�ؼ����Ӳ���
        left,top,width,height:�ؼ��󶥿��
        hue:�ؼ���ɫ��ƫ����(0-360),��D2Dģʽ����
        blur:�ؼ�����ģ����
        state:���ؿؼ�״̬
        validate:���ؿؼ��Ƿ���Ч
        canDraw:�ؼ���ǰ�Ƿ���Ի���
        redraw():�ؼ��ػ�
        tooltip:�ؼ�����ʾ�ı�
        tooltip(text):������ʾ�ı�
        rect:���ش����󶥿��("��,��,��,��"���ַ���)
        client:���ش��ڿͻ����󶥿��("��,��,��,��"���ַ���)

    //�ؼ�������������ַ� WM_EX_JS_DISPATCH ��Ϣ����Ϣ�ص�����

    ����ؼ���js����/������
        CheckButton/RadioButton:  
            check:�ؼ��Ƿ�ѡ��(0δѡ��,1ѡ��,2��ѡ)

*/

//��ť3�����¼�
function onBtn3Clicked(oEvent)
{
    //���ô��ڵ���Ϣ��
    DUI.alert("�����˰�ť3");

    //�����Զ������
    �ҵĶ���.�������(123,123.45,"��������");

    //�����Զ������,����ϵͳ�Ի��򵯳�
    $.alert("���� �ҵĶ���.�ӷ�(10,25) �ķ���ֵΪ:" + �ҵĶ���.�ӷ�(10,25));
}

//��ѡ��3ѡ���¼�
function onChk3Checked(oEvent)
{
    //���ÿؼ�1001�ı�ǩ����״̬
    var oStaticBlur = DUI.getObjFromID(1001);
    oStaticBlur.visible = oEvent.check;
}

//��ѡ��4ѡ���¼�
function onChk4Checked(oEvent)
{
    //�ж��Ƿ�ѡ��
    if(oEvent.check)
    {
        //���ñ���,��ʱ��
        oEvent.text="ʱ�ӽ�����";
        oEvent.setTimer(500);
        onChk4Timer(); //����������Чһ��
    }
    else
    {
        //���ñ���,��ʱ��
        oEvent.text="ʱ��ֹͣ";
        oEvent.killTimer();
    }
}

//��ѡ��4ʱ���¼�
function onChk4Timer(oEvent)
{
    //��IDΪ1000�ı�ǩ
    var oStatic1 = DUI.getObjFromID(1000);
    if (oStatic1 != null)
    {
        //���óɵ�ǰʱ��
        var oDate = new Date();
        oStatic1.text = oDate.getHours() + ":" + oDate.getMinutes() + ":" + oDate.getSeconds();
    }

    var oListView = DUI.getObjFromID(301);
    if(oListView != null)
    {
        oListView.hue = (oListView.hue + 5) % 360;
    }
    
}

//����,�������JS����
function CodeCallJS()
{
    return DUI.alert("�����Ƿ�����ر�", 36) //ѯ��|�Ƿ�
}
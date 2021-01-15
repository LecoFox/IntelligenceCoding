package top.hcode.hoj.controller.oj;

import cn.hutool.core.map.MapUtil;
import com.baomidou.mybatisplus.core.metadata.IPage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import top.hcode.hoj.common.result.CommonResult;
import top.hcode.hoj.dao.ContestMapper;
import top.hcode.hoj.pojo.vo.AnnouncementVo;
import top.hcode.hoj.pojo.vo.ConfigVo;
import top.hcode.hoj.pojo.vo.ContestVo;
import top.hcode.hoj.service.impl.AnnouncementServiceImpl;
import top.hcode.hoj.utils.Constants;
import top.hcode.hoj.utils.RedisUtils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * @Author: Himit_ZH
 * @Date: 2020/12/26 14:12
 * @Description: 处理客户端主页的请求
 */
@RestController
@RequestMapping("/api")
public class HomeController {

    @Autowired
    private ContestMapper contestDao;

    @Autowired
    private ConfigVo configVo;

    @Autowired
    private AnnouncementServiceImpl announcementDao;

    @Autowired
    private RedisUtils redisUtils;

    /**
     * @MethodName getRecentContest
     * @Params * @param null
     * @Description 获取最近14天的比赛信息列表
     * @Return CommonResult
     * @Since 2020/12/29
     */

    @GetMapping("/get-recent-contest")
    public CommonResult getRecentContest() {
        List<ContestVo> contests = contestDao.getWithinNext14DaysContests();
        return CommonResult.successResponse(contests);
    }

    /**
     * @MethodName getRecentOtherContest
     * @Params * @param null
     * @Description 获取最近其他OJ的比赛信息列表
     * @Return CommonResult
     * @Since 2020/1/15
     */

    @GetMapping("/get-recent-other-contest")
    public CommonResult getRecentOtherContest() {
        String redisKey = Constants.Schedule.RECENT_OTHER_CONTEST.getCode();
        List<HashMap<String, Object>> contestsList;
        // 从redis获取比赛列表
        contestsList = (ArrayList<HashMap<String, Object>>) redisUtils.get(redisKey);

        HashMap<String, Object> resp = new HashMap<>();
        // 比赛列表为空，传入空列表，以免前端出错
        if (contestsList == null) {
            resp.put("data", "");
            return CommonResult.successResponse(resp);
        }
        resp.put("data", contestsList);
        return CommonResult.successResponse(resp);
    }

    /**
     * @MethodName getCommonAnnouncement
     * @Params * @param null
     * @Description 获取主页公告列表
     * @Return CommonResult
     * @Since 2020/12/29
     */

    @GetMapping("/get-common-announcement")
    public CommonResult getCommonAnnouncement(@RequestParam(value = "limit", required = false) Integer limit,
                                              @RequestParam(value = "currentPage", required = false) Integer currentPage) {
        if (currentPage == null || currentPage < 1) currentPage = 1;
        if (limit == null || limit < 1) limit = 10;
        IPage<AnnouncementVo> announcementList = announcementDao.getAnnouncementList(limit, currentPage, true);
        return CommonResult.successResponse(announcementList);
    }


    /**
     * @MethodName getWebConfig
     * @Params * @param null
     * @Description 获取网站的基础配置。例如名字，缩写名字等等。
     * @Return CommonResult
     * @Since 2020/12/29
     */

    @GetMapping("/get-website-config")
    public CommonResult getWebConfig() {

        return CommonResult.successResponse(
                MapUtil.builder().put("baseUrl", configVo.getBaseUrl())
                        .put("name", configVo.getName())
                        .put("shortName", configVo.getShortName())
                        .put("register", configVo.getRegister())
                        .put("recordName", configVo.getRecordName())
                        .put("recordUrl", configVo.getRecordUrl())
                        .put("projectName", configVo.getProjectName())
                        .put("projectUrl", configVo.getProjectUrl()).map()
        );
    }

}
# 管理端部署

灵狮后台是管理员使用的运营后台:组织架构、角色权限、知识库、模型、审批、审计都在这里管理。

## 环境要求

- Docker 与 Docker Compose
- 内存建议 ≥ 16GB(有降配编排,详见下文)

## 部署

```bash
git clone https://github.com/yangzk2/lingshi.git
cd lingshi/lingshi-console/docker
docker compose up -d
```

机器内存 ≤ 16GB 时,使用降配编排(压缩 ES 堆与容器内存上限):

```bash
docker compose -f docker-compose.yml -f docker-compose.local.yml up -d
```

启动完成后:

| 服务 | 地址 |
|---|---|
| 管理端入口 | <http://localhost:3001> |
| API 服务 | <http://localhost:7860> |

## 初始化

1. 打开管理端入口,注册第一个账号 —— **首个注册的账号自动成为超级管理员**
2. 登录后进入「系统管理」,依次配置:
   - 组织架构(公司 / 部门 / 小组)
   - 角色与菜单权限
   - 知识库与模型服务

## 数据说明

- 数据库、向量库、对象存储、缓存均由 compose 编排启动,数据卷落在 `docker/` 目录下(该目录已配置忽略,不会进入代码仓库)
- 生产部署请为各中间件配置独立的强密码与持久化卷

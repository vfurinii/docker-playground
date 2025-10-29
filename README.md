# docker-playground

🚀 Roadmap de POCs com Docker e Kubernetes

# Etapa 1 – Fundamentos (Docker + K8s básico)

## Hello World

 - App Spring Boot simples (/hello) containerizado no Docker.

 - Push no DockerHub.

 - Deploy no Minikube (ou Kind).

- Criar Deployment + Service.

## Frontend + Backend

- Backend Spring Boot REST.

- Frontend React simples.

- Docker Compose para rodar local.

- Depois, Deployment + Service no K8s.

- App + Banco de Dados

- Spring Boot + PostgreSQL (Docker).

Migrar para K8s com PVC (PersistentVolumeClaim).

Configurar ConfigMap e Secret para credenciais do banco.

🔹 Etapa 2 – Escalabilidade e Redes

Ingress Controller

Instalar NGINX ingress.

Roteamento:

/api → backend

/ → frontend

Horizontal Pod Autoscaler (HPA)

Expor métricas de CPU/Memória no app Spring Boot (Micrometer + Actuator).

Configurar HPA para escalar automaticamente os pods.

Kafka no Kubernetes

Subir Kafka/ZooKeeper no cluster (ou usar Strimzi Operator).

Criar app Spring Boot producer/consumer.

Testar com múltiplos pods consumidores.

🔹 Etapa 3 – Observabilidade

Monitoramento (Prometheus + Grafana)

Deploy do Prometheus + Grafana no cluster.

Configurar scraping de métricas da sua app (via Micrometer).

Criar dashboards no Grafana.

Logs Centralizados (Loki + Grafana ou ELK)

Subir Loki + Grafana.

Configurar pods para enviarem logs.

Consultar logs centralizados no Grafana.

🔹 Etapa 4 – Entrega Contínua

CI/CD com Jenkins + K8s

Pipeline Jenkins:

Build da imagem Docker.

Push no DockerHub.

Deploy automático no K8s (kubectl apply).

Testes automatizados com JUnit/Mockito integrados ao pipeline.

Blue-Green Deployment

Criar duas versões da mesma app.

Alternar entre elas com Ingress.

Testar rollback rápido.

Canary Release (Avançado)

Usar Istio ou Linkerd para roteamento de tráfego gradual.

90% tráfego → v1

10% tráfego → v2

🔹 Etapa 5 – Multi-Tenancy e Segurança

Advanced ConfigMaps and Secrets

Application that uses sensitive environment variables (e.g., AWS S3 credentials).

Inject via Secret.

Manage configurations by namespace.

Multi-namespace/multi-tenant

Create different namespaces for different clients.

Run the same isolated application in each namespace.

Use NetworkPolicies to isolate traffic.

Security with ServiceAccounts and RBAC

Configure settings so that an application can access what it needs.


# 🚀 Docker & Kubernetes Labs

Este repositório contém uma coleção de **POCs, estudos e experimentos** com Docker, Kubernetes e ferramentas do ecossistema Cloud Native.  
A ideia é servir como um **playground** para aprender, testar e evoluir em conceitos de containers, orquestração e DevOps.

---

## 📂 Estrutura do Repositório

- **docker/** → Primeiros experimentos com Docker (Hello World, APIs, frontend).  
- **kubernetes/** → Manifests de Deployments, Services, Ingress, Volumes e Monitoramento.  
- **cicd/** → Pipelines com Jenkins e GitHub Actions para automação.  
- **multi-tenancy/** → POCs sobre namespaces, RBAC e isolamento multi-tenant.  

---

## 🔹 Roadmap de Estudos

1. **Docker Básico**
   - Criar uma imagem simples (`hello-world`).   -  done
   - Containerizar um app Spring Boot e Java.    - done
   - Subir no DockerHub.                         - done

2. **Kubernetes Essencial**
   - Deploy de aplicações no cluster. done
   - Configurar Services e Ingress. done
   - Persistência com Volumes. done

3. **Escalabilidade**
   - Horizontal Pod Autoscaler (HPA). done
   - Testes de carga com k6 ou Gatling. done

4. **Observabilidade**
   - Instalar Prometheus + Grafana. done
   - Coletar métricas e visualizar dashboards.

5. **CI/CD**
   - Pipeline Jenkins para build e deploy automático.
   - Estratégias Blue-Green e Canary Deploy.

6. **Multi-Tenancy & Segurança**
   - Namespaces para diferentes times.
   - RBAC para controle de acesso.
   - ConfigMaps e Secrets para configs sensíveis.

---

## 📦 Tecnologias Utilizadas

- **Docker**
- **Kubernetes (Minikube/Kind)**
- **Spring Boot**
- **React**
- **PostgreSQL**
- **Kafka**
- **Prometheus + Grafana**
- **Jenkins**
- **GitHub Actions (opcional)**

---

## 👨‍💻 Autor

**Vitor Matheus Garcia Furini**  
📍 Porto Alegre, RS, Brasil  
📧 [vitorfurini@hotmail.com](mailto:vitorfurini@hotmail.com) | [GitHub](https://github.com/vfurinii)

---

> ⚡ Este repositório está em constante evolução, com POCs incrementais para aprender Docker, Kubernetes e todo o ecossistema Cloud Native.

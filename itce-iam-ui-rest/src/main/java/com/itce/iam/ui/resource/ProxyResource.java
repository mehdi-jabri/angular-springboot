package com.itce.iam.ui.resource;

import com.itce.iam.ui.filter.LoggingFilter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.Invocation;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;
import java.io.InputStream;

@Path("{any: .*}")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@Component
public class ProxyResource {

    private static final String AUTHORIZATION_HEADER = "Authorization";
    private Client client;

    @Value("${iam.api.base.url:http://localhost:8081/api}")
    private String iamApiBaseUrl;

    public ProxyResource() {
        client = ClientBuilder.newClient();
        client.register(new LoggingFilter());
    }

    @GET
    public Response get(@Context UriInfo uriInfo, @Context HttpHeaders headers) {
        return client.target(iamApiBaseUrl)
                .path(uriInfo.getPath())
                .request(MediaType.APPLICATION_JSON)
                .header(AUTHORIZATION_HEADER, headers.getHeaderString(AUTHORIZATION_HEADER))
                .get();
    }

    @POST
    public Response post(@Context UriInfo uriInfo, @Context HttpHeaders headers, InputStream inputStream) {
        return buildRequest(uriInfo.getPath(), headers.getHeaderString(AUTHORIZATION_HEADER))
                .post(Entity.json(inputStream));
    }

    @PUT
    public Response put(@Context UriInfo uriInfo, @Context HttpHeaders headers, InputStream inputStream) {
        Response response = buildRequest(uriInfo.getPath(), headers.getHeaderString(AUTHORIZATION_HEADER)).put(Entity.json(inputStream));
        return Response.status(response.getStatus()).entity(response.readEntity(Object.class)).build();
    }

    @DELETE
    public Response delete(@Context UriInfo uriInfo, @Context HttpHeaders headers) {
        return buildRequest(uriInfo.getPath(), headers.getHeaderString(AUTHORIZATION_HEADER))
                .delete();
    }

    private Invocation.Builder buildRequest(String path, String accessToken) {
        return client.target(iamApiBaseUrl)
                .path(path)
                .request(MediaType.APPLICATION_JSON)
                .header(AUTHORIZATION_HEADER, accessToken);
    }

}
